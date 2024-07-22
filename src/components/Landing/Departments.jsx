import React from "react";

const Departments = () => {
  return (
    <>
      <section id="departments" class="departments">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Departments</h2>
            <p>
              We coordinate and administrate healthcare services to ensure
              effective delivery and optimal patient outcomes. The various
              departments play crucial roles, each contributing to the overall
              functioning of the health management system.
            </p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
                  <a
                    class="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                  >
                    <h4>Cardiology</h4>
                    <p>
                      We provide services like managing hypertension, heart
                      failure, ...
                    </p>
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                  >
                    <h4>Neurology</h4>
                    <p>
                      We mainly conducting thorough neurological assessments.
                    </p>
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <h4>Hepatology</h4>
                    <p>
                      Focusing mainly on promoting liver health and other health
                      conditions.
                    </p>
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                  >
                    <h4>Pediatrics</h4>
                    <p>
                      Providing Children's preventive care, vaccinations, and
                      monitoring developmental milestones.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-8">
              <div class="tab-content">
                <div class="tab-pane active show" id="tab-1">
                  <h3>Cardiology</h3>
                  <p class="fst-italic">
                    The primary functions of cardiology departments include
                    conducting diagnostic tests such as echocardiograms, stress
                    tests, and
                  </p>
                  <img
                    src="assets/img/departments-1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <p style={{ textAlign: "justify" }}>
                    cardiac catheterizations to assess heart health. They also
                    provide essential services like managing hypertension, heart
                    failure, and arrhythmias through medication, lifestyle
                    interventions, and, when necessary, advanced procedures such
                    as angioplasty or bypass surgery. <br />
                    Ultimately, our cardiology departments contribute
                    significantly to overall health management by addressing one
                    of the leading causes of morbidity and mortality worldwide,
                    ensuring comprehensive cardiovascular care for individuals
                    and promoting heart health at both individual and community
                    levels.
                  </p>
                </div>
                <div class="tab-pane" id="tab-2">
                  <h3>Neurology</h3>
                  <p class="fst-italic">
                    These departments are integral components of healthcare
                    institutions, employing specialized neurologists and
                    healthcare professionals
                  </p>
                  <img
                    src="assets/img/departments-2.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <p style={{ textAlign: "justify" }}>
                    dedicated to understanding and addressing conditions that
                    affect the brain, spinal cord, and peripheral nerves. The
                    primary objectives of neurology departments include
                    conducting thorough neurological assessments, utilizing
                    advanced diagnostic technologies, and formulating
                    personalized treatment plans for patients with neurological
                    disorders. <br />
                    Common conditions addressed by neurology departments include
                    epilepsy, stroke, multiple sclerosis, neurodegenerative
                    diseases (such as Alzheimer's and Parkinson's), and various
                    neuromuscular disorders.
                  </p>
                </div>
                <div class="tab-pane" id="tab-3">
                  <h3>Hepatology</h3>
                  <p class="fst-italic">
                    Hepatology departments play a crucial role in health
                    management by specializing in the study, diagnosis, and
                    treatment of liver diseases.
                  </p>
                  <img
                    src="assets/img/departments-3.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <p style={{ textAlign: "justify" }}>
                    These departments focus on promoting liver health and
                    addressing a wide range of conditions, including hepatitis,
                    cirrhosis, fatty liver disease, and liver cancer.
                    Hepatologists, specialized physicians within these
                    departments, employ a multidisciplinary approach,
                    collaborating with other medical professionals such as
                    gastroenterologists, radiologists, and surgeons to provide
                    comprehensive care. <br />
                    By combining clinical expertise, cutting-edge research, and
                    community outreach, our Hepatology departments contribute
                    significantly to the overall management of liver health,
                    ultimately enhancing patient outcomes and promoting public
                    awareness about liver-related issues.
                  </p>
                </div>
                <div class="tab-pane" id="tab-4">
                  <h3>Pediatrics</h3>
                  <p class="fst-italic">
                    Our Pediatrics departments play a crucial role in health
                    management by focusing on the medical care and well-being of
                    infants, children, and adolescents.
                  </p>
                  <img
                    src="assets/img/departments-4.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <p>
                    These specialized departments within our healthcare
                    institutions are dedicated to addressing the unique
                    healthcare needs of the pediatric population. Our Doctors
                    are trained to diagnose and treat a wide range of medical
                    conditions specific of children. They provide preventive
                    care, vaccinations, and monitor developmental milestones.{" "}
                    <br />
                    The emphasis in pediatric health management extends beyond
                    treating illnesses to promoting overall health and
                    preventing diseases. This involves educating parents and
                    caregivers about nutrition, safety, and proper child
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;
