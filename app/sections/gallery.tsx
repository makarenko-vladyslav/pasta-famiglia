"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * ACT III: The Soul — Atmosphere Pan
 * Layout: HorizontalPan ribbon on desktop, static grid on mobile.
 * Role: Editorial atmosphere showcase for Pasta Famiglia.
 */
export function SectionGallery() {
  const photos = [
    { id: "01", caption: "Справжня паста", url: "https://images.pexels.com/photos/6248860/pexels-photo-6248860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "02", caption: "Живий вогонь", url: "https://images.pexels.com/photos/6248860/pexels-photo-6248860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "03", caption: "Римський стиль", url: "https://images.pexels.com/photos/6248860/pexels-photo-6248860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "04", caption: "Авторські соуси", url: "https://images.pexels.com/photos/6248860/pexels-photo-6248860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "05", caption: "Затишна зала", url: "https://images.pexels.com/photos/6248860/pexels-photo-6248860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "06", caption: "Свіжий базилік", url: "https://images.pexels.com/photos/6248860/pexels-photo-6248860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "07", caption: "Ранкова випічка", url: "https://images.pexels.com/photos/6248860/pexels-photo-6248860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
    { id: "08", caption: "Вечір у Києві", url: "https://images.pexels.com/photos/6248860/pexels-photo-6248860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" },
  ];

  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Атмосфера</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Смак італійського життя в деталях
          </h2>
        </Reveal>
      </div>

      {/* 
        Mobile: Replaced by a 2x3 static grid (first 6 images).
        Desktop: HorizontalPan ribbon.
        Responsive logic applied via Tailwind classes on the items.
      */}
      <div className="mt-12 lg:mt-0">
        <div className="lg:hidden px-4 pb-[var(--space-act)]">
          <div className="grid grid-cols-2 gap-4">
            {photos.slice(0, 6).map((item) => (
              <figure key={item.id} className="relative overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="rp-graded aspect-[3/4] w-full object-cover" 
                  loading="lazy" 
                />
                <figcaption className="mt-2 flex items-baseline justify-between text-[10px] uppercase tracking-wider text-muted">
                  <span>{item.caption}</span>
                  <span className="font-display">{item.id}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <HorizontalPan heightVh={220}>
            <div className="flex gap-10 px-10">
              {photos.map((item) => (
                <figure key={item.id} className="rp-pan-item relative shrink-0 overflow-hidden w-[400px]">
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    className="rp-graded aspect-[4/5] w-full object-cover" 
                    loading="lazy" 
                  />
                  <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
                    <span>{item.caption}</span>
                    <span className="font-display">{item.id}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </HorizontalPan>
        </div>
      </div>
    </section>
  );
}