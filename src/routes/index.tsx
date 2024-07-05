import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Input } from '~/components/ui/input';

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Accordion multiple collapsible class="w-full" value={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Layer 1</AccordionTrigger>
          <AccordionContent>
            Content 1 <Input />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
