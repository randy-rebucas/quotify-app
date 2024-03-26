import Image from 'next/image';

export default function QuotifyLogo() {
  return (
    <div className="wrapper__logo animate fade-in delay-last">
      <Image
        src="/images/icon-search.png"
        width={37}
        height={37}
        alt="Search Icon"
      />
    </div>
  );
}
