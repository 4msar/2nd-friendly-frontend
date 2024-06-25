import PublicView from "@/components/HOC/PublicView";
import React from "react";

const ContentGuidelines = () => {
  return (
    <main>
      <section className="pt-4 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                  <li className="breadcrumb-item">
                    <a href="index.php">Home</a>
                  </li>
                  <li className="breadcrumb-item">Community</li>
                  <li className="breadcrumb-item">Content Guidelines</li>
                </ol>
              </nav>
              <h4 className="fw-normal mt-3">Content Guidelines</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                People come to 2nd A Friendly to connect with great local
                businesses. We know that people won’t always agree, but we
                expect everyone on the site to treat one another and the
                platform with honesty and respect. We’ve put together these
                general guidelines to help set the tone for discourse on the
                site—just in case. Please also read the additional guidelines
                below for specific types of content that you might contribute to
                the site.
              </p>
              <ul>
                <li className="mb-2">
                  <strong className="text-dark">Relevance:</strong> Please make
                  sure your contributions are appropriate to the forum. For
                  example, reviews aren’t the place for rants about political
                  ideologies, a business’s employment practices, extraordinary
                  circumstances, or other matters that don’t address the core of
                  the consumer experience.
                </li>
                <li className="mb-2">
                  <strong className="text-dark">Inappropriate content:</strong>{" "}
                  Colorful language and imagery are fine, but there’s no place
                  for threats, harassment, lewdness, hate speech, or other
                  displays of bigotry.
                </li>
                <li className="mb-2">
                  <strong className="text-dark">Conflicts of interest:</strong>{" "}
                  Your contributions to 2nd A Friendly should be unbiased and
                  objective. For example, you shouldn’t write reviews of your
                  own business or employer, your friends’ or relatives’
                  business, your peers or competitors in your industry, or
                  businesses in your networking group. Businesses should never
                  ask customers to write reviews.
                </li>
                <li className="mb-2">
                  <strong className="text-dark">Privacy:</strong> Don’t
                  publicize people’s private information. For instance, please
                  don’t post close-up photos or videos of other patrons without
                  their permission, and don’t post other people’s full names
                  unless you’re referring to someone who is commonly referred to
                  by their full name.
                </li>
                <li className="mb-2">
                  <strong className="text-dark">Promotional content:</strong>{" "}
                  Don’t post promotional material unless it’s in connection with
                  a 2nd A Friendly advertising product and through a Business
                  Account. Let’s keep the site useful for consumers and not
                  overrun with commercial noise from every user.
                </li>
                <li className="mb-2">
                  <strong className="text-dark">Post your own content:</strong>{" "}
                  Don’t swipe content from other sites, users, or businesses.
                  Write your own copy and only share your own photos and videos.
                  This also means you shouldn’t use chatbots or other AI tools
                  to create reviews, including using such tools to draft or
                  revise.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicView(ContentGuidelines, "Content Guidelines");
