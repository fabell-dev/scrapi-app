import Card from "@/components/Card";
import { filterByComponent } from "@/lib/filter";

type Props = { data: any; __component: string };

async function CardSeason(props: Props) {
  const { data, __component } = props;

  const array = filterByComponent(data, __component);
  return (
    <>
      <div className="flex flex-row items-center justify-evenly">
        {array.map((item: any, index: number) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
}
export default CardSeason;
