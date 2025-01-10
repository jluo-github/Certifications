import { CardHeader, CardTitle, Card, CardContent } from "@/components/ui/card";
import { type CertType, certs } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ id: string }>;
export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const [certDetail]: CertType[] = certs.filter((cert) => cert.id === id);

  return {
    title: `${certDetail.title}`,
    description: `Details for ${certDetail.title}`,
  };
}

const CertDetailPage = async (props: { params: Params }) => {
  const params = await props.params;
  const id = params.id;

  const [certDetail]: CertType[] = certs.filter((cert) => cert.id === id.toString());

  return (
    <div className='py-6 md:px-20 lg:px-28'>
      <Link
        href='/'
        className='text-xl hover:font-bold text-violet-800 dark:text-violet-200'>
        Back to Home
      </Link>

      <Card className='bg-violet-100 text-violet-800 dark:bg-slate-900 dark:text-violet-200 shadow-lg shadow-violet-300 dark:shadow-slate-400 border-none flex flex-col justify-center my-8'>
        <CardHeader>
          <CardTitle className='text-center text-lg my-8'>{certDetail.title}</CardTitle>{" "}
          <Image
            src={certDetail.image}
            alt={certDetail.title}
            height='900'
            width='700'
            className='shadow-xl shadow-violet-300 dark:shadow-xl dark:shadow-slate-400/[0.5] w-full rounded-md object-cover'
          />
        </CardHeader>

        <CardContent className='text-default leading-relaxed md:text-xl font-semibold md:leading-9'>
          {certDetail.description}
        </CardContent>
      </Card>
    </div>
  );
};
export default CertDetailPage;
