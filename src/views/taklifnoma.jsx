import { useParams } from 'react-router-dom';

export default function Taklifnoma() {
    const { name } = useParams();
    const cleanedName = name?.replaceAll("_", " ") || '';
  
    return (
      <div className='w-screen h-screen overflow-auto grid items-center justify-center bg-gray-200'>
        <div className='grid w-[667px] h-[500px] bg-[url("assets/bg.png")] pl-[218px] pr-[72px] pt-[32px] pb-[212px]'>
            <div className='text-[16px] leading-[21px]'>
                <h1 className='text-center font-black leading-[32px]'>Assalomu alaykum!</h1>

                <div className='pl-[24px] flex gap-4'>
                    <span className='font-bold'>Hurmatli!</span>  
                    <div className='border-b grow-1 text-center'>
                        <em className='tracking-widest'>{ cleanedName }</em>
                    </div>
                </div>

                <p className='text-center'>
                    sizni aziz farzandlarimiz
                </p>
                
                <p className='text-center text-[24px] text-orange-400 tracking-wider leading-[28px]'>
                    OBIDJON va SEVINCHOY
                </p>

                <p className='text-justify'>
                    larning nikoh kechasi hamda aziz farzandimiz <span className='text-[20px] text-orange-400 tracking-widest leading-[24px]'>SAIDALI</span> ning hatna to'yi munasabati bilan <span className='font-bold'> 2025-yil 14-iyun </span> soat <span className='font-bold'>18:00</span> da Ishtxon shaxarchasi <a className='text-orange-400 hover:text-indigo-600' href='https://maps.app.goo.gl/VoPK26FCgqtqMcsF8' target='_blank'>"Asamiddin Ota" </a> to'yxonasida yoziladigan shukurona dasturxonimizga, lutfan taklif qilamiz.
                </p>

                <p className='text-[14px] pl-[32px]'>
                    <br />
                    <span className='font-bold'>Hurmat bilan:</span> Qo'shrabot tumani, Chorloq qishlog'i <br />Qilichboy Ibodovlar xonodoni
                </p>
            </div>
        </div>
      </div>
    );
  }