import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Shayegan Digital - Edmonton Web Agency';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a', // your brand 'ink' color
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <span style={{ color: '#fdfcf9', fontSize: 96, fontWeight: 900, letterSpacing: '-0.02em', fontFamily: 'serif' }}>
            Shayegan
          </span>
          <span style={{ color: '#c9a96e', fontSize: 96, fontStyle: 'italic', marginLeft: 15, fontFamily: 'serif' }}>
            Digital
          </span>
        </div>
        <div
          style={{
            color: '#c9a96e',
            fontSize: 28,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginTop: '20px',
            fontFamily: 'monospace',
            opacity: 0.8,
          }}
        >
          Premium Web Agency • Edmonton, AB
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            color: '#fdfcf9',
            opacity: 0.4,
            fontSize: 24,
            letterSpacing: '0.1em',
            fontFamily: 'sans-serif',
          }}
        >
          shayegandigital.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
