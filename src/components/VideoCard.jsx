export function VideoCard({ title, src }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative">
      <video
        src={src}
        controls
        className="max-h-full max-w-full"
      />
    </div>
  );
}