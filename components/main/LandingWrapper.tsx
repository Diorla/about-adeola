export default function LandingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-red-700 via-purple-500 to-teal-400 text-white">
      {children}
    </div>
  );
}
