import PublicView from '@/components/HOC/PublicView'
import { createMarkup } from '@/helpers/functions'
import PublicService from '@/services/PublicService'
import Head from 'next/head'
import React from 'react'

const ClaimYourBusiness = ({data}) => {
  return (
    <main>
        <Head>
            <title>{data.title}</title>
        </Head>
    <section className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li className="breadcrumb-item">Company</li>
                            <li className="breadcrumb-item">{data.title}</li>
                        </ol>
                    </nav>
                    <h4 className="fw-normal mt-3">{data.title}</h4>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-0">
        <div className="container" dangerouslySetInnerHTML={createMarkup(data.description)} />
    </section>
</main>
  )
}

export default PublicView(ClaimYourBusiness)


export async function getServerSideProps(context) {
    const { params, query } = context;
    
    
    const payload = {
      slug: "claim-your-business",
    }
    const res = await PublicService.pageDetails(payload);
   
    console.log(res.data.sinData);
    
   
  
    return {
        props: {
          data:res.data.sinData,
        },
    };
  }