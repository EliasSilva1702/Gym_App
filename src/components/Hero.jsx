import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const images = ["/PerfilGym-img1.jpg", "/PerfilGym-img2.jpg"];
export const Hero = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mx-auto">
      <Carousel
        className="w-fit"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
          
        ]}
      >
        <CarouselContent className="w-fit">
          {images.map((image) => (
            <CarouselItem key={image}>
              <img
                src={image}
                alt="Perfil Gym"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};
