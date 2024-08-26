import { type ICardData } from "./AlignCardsProblemWrapper";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardsNotAlignedProps {
  cardData: ICardData;
}
const CardsNotAligned = ({
  cardData: { title, ctas = [], description, subtitle },
}: CardsNotAlignedProps) => {
  return (
    <div className="">
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="inline-flex">{title}</CardTitle>
          <CardDescription>Problem coded in {subtitle}</CardDescription>
        </CardHeader>
        <hr className="m-3" />
        <CardContent>{description}</CardContent>

        {ctas.length > 0 && (
          <>
            <hr className="m-3" />
            <CardFooter className="flex flex-col gap-4">
              {ctas.map((cta) => (
                <Button key={cta}>{cta}</Button>
              ))}
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};

export default CardsNotAligned;
