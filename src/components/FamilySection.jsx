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
            <h2 className="mt-6 px-2 font-script text-[clamp(2.4rem,9vw,3.75rem)] leading-tight text-maroon">
              {family.title}
            </h2>
            <FloralDivider className="mx-auto mt-6" />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
