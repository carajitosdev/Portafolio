'use client';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3DContent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  )
});

export default Scene3D;
