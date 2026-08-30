import Image from 'next/image';
import crt from '../../../public/images/crt.png';

/** The hero CRT monitor: the crt.png asset with a live terminal overlaid on the
 *  screen area. Screen content is passed as children. */
export function CRTMonitor({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[540px] drop-shadow-[0_24px_46px_rgba(0,0,0,0.5)]">
      <Image
        src={crt}
        alt="Cripsis running on a monitor"
        priority
        sizes="(max-width: 1024px) 90vw, 540px"
        className="block h-auto w-full"
      />
      <div
        className="scanlines crt-flicker absolute overflow-hidden rounded-[10px] bg-bg-0 px-[17px] py-[15px] font-mono shadow-[inset_0_0_34px_rgba(0,0,0,0.7)]"
        style={{ top: '11%', left: '17.5%', right: '17.5%', bottom: '33%' }}
      >
        {children}
      </div>
    </div>
  );
}
