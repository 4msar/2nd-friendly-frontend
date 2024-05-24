import PublicView from '@/components/HOC/PublicView'
import Head from 'next/head'
import React from 'react'

const AccessibilityStatement = () => {
  return (
    <main>
        <Head>
            <title>Accessibility Statement</title>
        </Head>
    <section className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li className="breadcrumb-item">Company</li>
                            <li className="breadcrumb-item">Accessibility Statement</li>
                        </ol>
                    </nav>
                    <h4 className="fw-normal mt-3">Accessibility Statement</h4>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p>Here at 2nd A Friendly, it is our mission to connect people with great local businesses. To accomplish our mission, we aim to make 2nd A Friendly available and accessible to as many people as possible, including people with disabilities. To help accomplish that goal, we strive to meet or exceed the requirements of the Web Content Accessibility Guidelines so that 2nd A Friendlyers who are blind, visually impaired, or who may have other disabilities have equal access to our site.</p>
                    <p>While we have undertaken extensive updates to our site and content to bring it in line with WCAG 2.1 guidelines, accessibility requires an ongoing commitment to monitoring our platforms and working to make all content accessible to our users. These efforts are necessarily ongoing, in part because our products and services are constantly developing as we create new ones and change others. In order to help us in this process, our internal teams work with an external consulting company to conduct accessibility audits (consisting of both automated and manual testing of our platforms) and assist us in working toward ongoing conformance with the WCAG 2.1 A/AA.</p>
                    <p>While you are visiting our platforms, you may notice that we integrate or make available third-party sites and tools such as Apple Maps. Though individuals may have challenges with access to these particular sites or tools, unfortunately 2nd A Friendly does not control the way content is portrayed on those sites, and we won’t be able to make changes to them.</p>
                    <p>As technology changes and new content and features are developed, 2nd A Friendly will continue its efforts toward making 2nd A Friendly accessible to everyone.</p>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default PublicView(AccessibilityStatement)