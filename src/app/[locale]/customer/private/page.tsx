import Link from "next/link";

export default function PrivateCustomerPage() {
  return <main className="max-w-5xl mx-auto flex flex-col">
    <h1 className="text-5xl text-center">
      Honestly, when was the last time you had your photo taken?
    </h1>
    <div className="grid grid-cols-2">
      <div>
        Is the only sorta OK photo of you your drivers license?
      </div>
      <div>
        Do you feel awkward infront of the camera?
      </div>
    </div>
    <div>
      Thats OK, I&apos;m right there with you, and you&apos;re not awkward.
    </div>
    <div>
      Seriously, that is like one of the rare passable photos taken of me 
      in years.
    </div>
    <div className="grid grid-cols-2">
      <div>
        But worry not,
      </div>
      <div>
        I&apos;m all about making you feel comfortable!
      </div>
    </div>
    <div>
      Think of it as us just hanging out and getting to know each other.
      I just happen to have a camera with me. No need to get the perfect 
      shot in the first try, I have enough gigabytes for retries. 
    </div>
    <div>
      But like in any relationship, in order for us to get relaxed and
      comfortable  we should click.
    </div>
    <div>
      How do we do that?
    </div>
    <div>
      Let&apos;s have coffee together and plan our shoot. If we are not
      in the same city, we can have coffee on facetime!
    </div>
    <div>
      If our schedules don’t align, just message me, and we get to know 
      each other during the shoot!
    </div>

    <Link href="/contact">Let&apos;s connect!</Link>
  </main>;
}
