import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useCallback } from "react"; 

const STATE_MACHINE = "State Machine 1";
const ARTBOARD = "Artboard";

export function useRiveLoginAnimation(
  userHasText: () => boolean,
  passHasText: () => boolean,
  showing: boolean
) {
  const { rive, RiveComponent } = useRive({
    src: "/Palko.riv",
    stateMachines: [STATE_MACHINE],
    artboard: ARTBOARD,
    autoplay: true,
  });

  const typeEmail = useStateMachineInput(rive, STATE_MACHINE, "typeEmail");
  const typePassword = useStateMachineInput(rive, STATE_MACHINE, "typePassword");
  const verPassword = useStateMachineInput(rive, STATE_MACHINE, "verPassword");

  const syncRiveFromState = useCallback(() => {
    if (!typeEmail || !typePassword || !verPassword) return;

    const uHas = userHasText();
    const pHas = passHasText();

    typeEmail.value = uHas;
    typePassword.value = pHas;

    if (pHas) {
      verPassword.value = showing;
    } else if (uHas) {
      verPassword.value = false;
    } else {
      verPassword.value = true;
    }
  }, [typeEmail, typePassword, verPassword, userHasText, passHasText, showing]); 

  useEffect(() => {
    if (!rive) return;
    syncRiveFromState(); 
  }, [showing, rive, syncRiveFromState]); 

  useEffect(() => {
    if (!typeEmail || !typePassword || !verPassword) return;
    
    syncRiveFromState(); 
  }, [typeEmail, typePassword, verPassword, syncRiveFromState])

  return { RiveComponent, syncRiveFromState };
}