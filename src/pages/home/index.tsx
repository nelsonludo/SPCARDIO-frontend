import MainHomeHeader from "./MainHomeHeader";
import About from "./About";
import Services from "./Services";
import Doctors from "./Doctors";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    // <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
    //   {/* Section Héro */}
    //   <div className="text-center max-w-3xl">
    //     <h1 className="text-5xl font-bold text-blue-600 mb-4">
    //       Bienvenue à I3S
    //     </h1>
    //     <p className="text-gray-700 text-lg mb-6">
    //       I3S est une institution de premier plan dédiée à l'excellence
    //       académique, à l'innovation et au développement holistique des
    //       étudiants. Notre mission est de fournir une éducation de qualité et de
    //       favoriser un environnement d'apprentissage préparant les étudiants aux
    //       défis de l'avenir.
    //     </p>
    //     <Link
    //       to="/signin"
    //       className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
    //     >
    //       En savoir plus
    //     </Link>
    //   </div>

    //   {/* Section À Propos */}
    //   <div id="about" className="mt-16 max-w-4xl text-center">
    //     <h2 className="text-3xl font-bold text-gray-800 mb-4">
    //       À Propos de I3S
    //     </h2>
    //     <p className="text-gray-600 text-lg">
    //       Fondé en 1990, I3S est à la pointe de l'innovation éducative, offrant
    //       une large gamme de programmes adaptés à divers intérêts académiques.
    //       Notre corps professoral est composé de professionnels expérimentés
    //       dédiés à l'épanouissement des talents et à l'inspiration des étudiants
    //       pour qu'ils atteignent leur plein potentiel.
    //     </p>
    //     <p className="text-gray-600 text-lg mt-4">
    //       Avec un campus à la pointe de la technologie, des infrastructures de
    //       recherche modernes et un fort accent mis sur l'engagement
    //       communautaire, I3S continue de façonner l'avenir de l'éducation.
    //       Rejoignez-nous et participez à une aventure d'apprentissage
    //       transformante.
    //     </p>
    //   </div>

    //   {/* Section Historique */}
    //   <div id="background" className="mt-16 max-w-4xl text-center">
    //     <h2 className="text-3xl font-bold text-gray-800 mb-4">
    //       Historique de I3S
    //     </h2>
    //     <p className="text-gray-600 text-lg">
    //       Depuis sa création, I3S s'est engagé à fournir une éducation de
    //       qualité adaptée aux évolutions du monde moderne. Grâce à une pédagogie
    //       innovante et une approche centrée sur l'étudiant, notre institution a
    //       formé des milliers de diplômés qui contribuent activement au
    //       développement de la société.
    //     </p>
    //     <p className="text-gray-600 text-lg mt-4">
    //       Notre engagement envers l'excellence et l'innovation nous a permis
    //       d'établir des collaborations avec des universités et des institutions
    //       du monde entier, garantissant ainsi à nos étudiants une ouverture
    //       internationale et des opportunités uniques.
    //     </p>
    //   </div>
    // </div>
    <>
      <Navbar></Navbar>
      <main>
        <div id="home">
          <MainHomeHeader></MainHomeHeader>
        </div>
        <div id="about">
          <About></About>
        </div>
        <div id="services">
          <Services></Services>
        </div>
        <div id="doctors">
          <Doctors></Doctors>
        </div>
        <div id="blogs">
          <Blogs></Blogs>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
