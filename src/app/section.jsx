export default function Section({ children, className = "", background = "" }) {
  return (
    <section className={`w-full ${background}`}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className={className}>
          {children}
        </div>
      </div>
    </section>
  );
} 