import Link from 'next/link';

export default function Card({ title, description, link, linkLabel, bgImage }) {
  const isExternal = link?.startsWith('http');
  const hasBackground = !!bgImage;

  return (
    <div
      className={`rounded-xl shadow-lg p-6 flex flex-col justify-end ${
        hasBackground ? 'h-64 text-white bg-cover bg-center' : 'bg-gray-900 text-white'
      }`}
      style={hasBackground ? {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: title.includes('SignalRise') ? 'contain' : 'cover',
  backgroundPosition: title.includes('Blog') ? 'top center' : title.includes('SignalRise') ? 'top' : 'center',
  backgroundRepeat: 'no-repeat'
} : {}}



    >
      <div className={hasBackground ? 'bg-black/60 p-4 rounded' : ''}>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm">{description}</p>

        {link && (
          isExternal ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-300 hover:underline"
            >
              {linkLabel || 'Explore →'}
            </a>
          ) : (
            <Link href={link}>
              <p className="mt-4 text-blue-300 hover:underline">
                {linkLabel || 'Explore →'}
              </p>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
