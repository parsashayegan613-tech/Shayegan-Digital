import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Default favicon size
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0a0a0a',   // var(--ink) dark background
          color: '#c9a96e',        // var(--gold) text color
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontFamily: 'serif',
          fontStyle: 'italic',
          borderRadius: '4px',     // Subtle softening of edges
          paddingTop: '2px',       // Optical centering for the 'S'
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    }
  );
}
