import weddingData from "../data/weddingData"
import { FloralDivider, Stagger, StaggerItem } from "./Ornaments"

export default function FamilySection() {
  const { family } = weddingData

  return (
    <section className="relative overflow-hidden bg-ivory-deep px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-xl text-center lg:max-w-3xl">
        <Stagger>
          <StaggerItem>
            <FloralDivider className="mx-auto" />
            <p className="mt-6 font-script text-[clamp(1.65rem,5.5vw,2.35rem)] leading-tight text-gold-deep">
              {family.withLove}
            </p>
            <h2 className="mt-2 px-2 font-script text-[clamp(2.5rem,9vw,3.85rem)] leading-tight text-maroon">
              {family.title}
            </h2>
            <FloralDivider className="mx-auto mt-6" />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
