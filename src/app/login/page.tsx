"use client";
import Button from "@/components/buttons/button";
import InputComponent from "@/components/InputComponent/InputComponent";
import { useRiveLoginAnimation } from "@/hooks/useRiveLoginAnimation";
import {
  LockKeyholeBold,
  UserBold,
  EyeBold,
  EyeClosedBold,
} from "solar-icon-set";
import { useRef, useState } from "react";

export default function LoginPage() {
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [showing, setShowing] = useState(false);

  const userHasText = () => (userRef.current?.value?.length ?? 0) > 0;
  const passHasText = () => (passRef.current?.value?.length ?? 0) > 0;

  const { RiveComponent, syncRiveFromState } = useRiveLoginAnimation(
    userHasText,
    passHasText,
    showing
  );

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[linear-gradient(168deg,#F4CCBE_11.09%,#F2E8D8_46.21%,#D0E4DD_92.33%)]">
      <div className="gap-9 px-6 py-4 rounded-2xl bg-white/59 shadow-lg w-63 items-center flex flex-col">
        <div className="rounded-full w-[123px] h-[123px] bg-[#FFFFFF] overflow-hidden">
          <RiveComponent className="w-full h-full" />
        </div>

        <div className="gap-7 flex-col flex w-full">
          <InputComponent
            ref={userRef}
            placeholder="Usuario"
            icon={<UserBold color="#05765F" />}
            onInput={syncRiveFromState}
            onBlur={syncRiveFromState}
          />

          <div className="relative w-full">
            <InputComponent
              ref={passRef}
              type={showing ? "text" : "password"}
              placeholder="Contraseña"
              icon={<LockKeyholeBold color="#05765F" />}
              onInput={() => {
                if (!passHasText() && showing) setShowing(false);
                syncRiveFromState();
              }}
              onBlur={syncRiveFromState}
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                if (!passHasText()) {
                  setShowing(false);
                  syncRiveFromState();
                  return;
                }
                setShowing((prev) => !prev);
              }}
              aria-label={showing ? "Ocultar contraseña" : "Mostrar contraseña"}
              aria-pressed={showing}
            >
              {showing ? (
                <EyeClosedBold size={20} color="#05765F" />
              ) : (
                <EyeBold size={20} color="#05765F" />
              )}
            </button>
          </div>
        </div>

        <div>
          <Button>Iniciar Sesión</Button>
        </div>
      </div>
    </div>
  );
}