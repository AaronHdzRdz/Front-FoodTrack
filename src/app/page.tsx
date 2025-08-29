
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#020202'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          color: '#2563eb',
          padding: '2rem 4rem',
          borderRadius: '1rem',
          textAlign: 'center'
        }}>
          Hola mundo
        </h1>
        <div style={{
          marginTop: '2rem',
          color: '#fff',
          borderRadius: '1rem',
          padding: '2rem 2.5rem',
          display: 'inline-block',
          fontSize: '1.25rem',
          minWidth: '340px',
          maxWidth: '90vw',
          textAlign: 'left',

        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            letterSpacing: '1px',
            textShadow: '0 2px 8px #1e3a8a44'
          }}>
            Restaurante, equipo 5
          </div>
          <div style={{
            fontWeight: '500',
            marginBottom: '0.5rem',
            fontSize: '1.1rem',
            letterSpacing: '0.5px'
          }}>
            Integrantes:
          </div>
          <ul style={{
            listStyle: 'disc',
            paddingLeft: '1.5rem',
            margin: 0,
            color: '#f1f5f9',
            fontSize: '1.08rem',
            lineHeight: '2.1',
            fontWeight: 400
          }}>
            <li style={{ marginBottom: '0.2rem' }}>Sebastian Aaron Hernandez Resendiz</li>
            <li style={{ marginBottom: '0.2rem' }}>Angel Emiliano Torres Tenorio</li>
            <li style={{ marginBottom: '0.2rem' }}>Miguel Anguel Mejia Morales</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
