import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      gap: '20px',
      textAlign: 'center',
      padding: '40px',
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: '#5000ca' }}>404</h1>
      <h2 style={{ margin: 0 }}>Page Not Found</h2>
      <p style={{ maxWidth: '400px', opacity: 0.7 }}>
        The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '12px 28px',
          backgroundColor: '#5000ca',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
