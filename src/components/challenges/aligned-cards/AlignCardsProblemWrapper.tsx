import CardsNotAligned from "./CardsNotAligned";

export interface ICardData {
  title: string;
  subtitle: string;
  description: string;
  ctas?: string[];
}

const cardsData: ICardData[] = [
  {
    title: "First Card",
    subtitle: "Has subtitle",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sapiente! Amet rem, doloribus dolore dolores dignissimos veritatis possimus in quidem ipsa recusandae ad, totam ea aliquam dolorum quisquam temporibus corporis.",
    ctas: ["Click me", "Buy Now"],
  },
  {
    title: "Second Card",
    subtitle: "Includes subtitle",
    description:
      "Aliquid, ducimus. Doloribus saepe excepturi similique molestias expedita facilis fugiat! Doloremque, recusandae. Mollitia repellat cumque repudiandae consequuntur, quas dignissimos velit pariatur accusantium.",
    ctas: ["Learn More", "Subscribe Now", "Sign Up", "Request Demo"],
  },
  {
    title: "Third Card",
    subtitle: "Subtitle Present",
    description:
      "Quidem, fugiat! Iure nemo harum laboriosam quis, adipisci sapiente commodi. Obcaecati explicabo quas possimus atque perferendis dolore fuga soluta alias reprehenderit voluptatum.",
  },
  {
    title: "Fourth Card",
    subtitle: "With subtitle",
    description:
      "Veniam, optio! Recusandae explicabo ab provident quibusdam saepe placeat temporibus earum delectus. Minus sapiente quidem esse cupiditate libero, laboriosam amet id nisi.",
    ctas: ["Join Now", "More Info", "Contact Us"],
  },
  {
    title: "Fifth Card",
    subtitle: "Has a subtitle",
    description:
      "Dolorum, officia. Repellendus ipsa id obcaecati dignissimos possimus maxime rerum labore sunt. Aperiam aliquam eos ullam voluptatum dolorum sequi at illo eaque.",
    ctas: ["Sign Up"],
  },
  {
    title: "Sixth Card",
    subtitle: "Features a subtitle",
    description:
      "Dignissimos, fugit. Quos nisi dolore expedita numquam autem unde! Rem, odio. Autem eos quas maxime ipsam totam esse libero, nulla corporis iusto.",
    ctas: ["Try for Free"],
  },
  {
    title: "Seventh Card",
    subtitle: "Subtitle available",
    description:
      "Soluta, accusamus. Illum similique fuga veniam quidem, accusamus pariatur perferendis eos repellat doloremque voluptates nihil? Molestiae autem delectus hic distinctio libero ipsum.",
    ctas: ["Shop Now", "View Details", "Learn More"],
  },
  {
    title: "Eighth Card",
    subtitle: "Includes a subtitle",
    description:
      "Nostrum, dignissimos. Quidem sint deleniti quo amet voluptatum obcaecati. Suscipit quod dignissimos voluptatem porro tenetur tempore, dolores voluptatibus repudiandae fugiat. Ipsum, placeat!",
  },
  {
    title: "Ninth Card",
    subtitle: "Subtitle present",
    description:
      "Tempora, reprehenderit. Officia ducimus dolore minima. Doloribus, molestiae, ipsa dolorum alias illo nulla beatae quae distinctio repudiandae dolor optio atque consectetur.",
    ctas: ["Get It Now", "Sign In", "Explore", "Purchase"],
  },
  {
    title: "Tenth Card",
    subtitle: "Has a subtitle",
    description:
      "Obcaecati, quaerat. Praesentium consequuntur quis eius, vel animi nam repellendus laborum hic ea! Assumenda fugit dolore reiciendis perspiciatis quod consectetur labore unde.",
    ctas: ["Order Now", "Discover More"],
  },
];

export const AlignCardsProblemWrapper = () => {
  return (
    <div>
      <p className="mb-4">
        Those cards should have the same size, and the hr tags should be aligns.
        But the description is a text and can have different sizes, the same for
        the CTAs
      </p>
      <div className="flex gap-3 flex-wrap">
        {cardsData.map((cardData) => (
          <CardsNotAligned cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default AlignCardsProblemWrapper;
