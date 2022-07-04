import React from "react";
import ProgressBar from "../components/ProgressBar";
import CVitem from "../components/CVitem";

const sectionProfile = (
    <div className="cv-content">
        <h3>Informations personnelles</h3>
        <ul>
            <li>Sérieux, appliqué, assidu et curieux.</li>
            <li>Photographe : photos de CV, portraits</li>
            <li>Réalisation de court-métrages</li>
            <li>
                Excellente maîtrise des logiciels audiovisuel Photoshop,
                Lightroom, Final Cut Pro
            </li>
            <li>Guitariste autodidacte depuis Mars 2021</li>
            <li>Trompettiste dans ma jeunesse : quelques concerts</li>
        </ul>

        <h3>{"Langues"}</h3>
        <ul>
            <li>Français : Langue maternelle</li>
            <li>Anglais : Bilingue</li>
            <li>Allemand : Intermédiaire</li>
        </ul>

        <h3>{"Langages"}</h3>
        <ul>
            <li>
                Python, C, LaTex, Git
                <br />
                <ProgressBar progress={95} />
            </li>
            <li>
                OCaml, Isabelle(HOL)
                <br />
                <ProgressBar progress={75} />
            </li>
            <li>
                Javascript, TypeScript
                <br />
                <ProgressBar progress={67} />
            </li>
            <li>
                React, HTML, CSS
                <br />
                <ProgressBar progress={63} />
            </li>
            <li>
                Go, Assembly
                <br />
                <ProgressBar progress={50} />
            </li>
            <li>
                B
                <br />
                <ProgressBar progress={45} />
            </li>
        </ul>
    </div>
);

const sectionEducation = (
    <div className="cv-content">
        <h3>{"École des Mines de Nancy"}</h3>
        <h4>2020 — 2023</h4>
        <h4>École Nationale Supérieure des Mines de Nancy, Nancy, France</h4>
        <ul>
            <li>
                <p className="bold">Département Informatique:</p>
                <p>
                    Software Engineering, Foundation of Computing, Programming
                    Languages, Cyber Awareness, Data Analysis, Deep Learning
                </p>
            </li>
            <li>
                <p className="bold">Projet Recherche au LORIA</p> encadré par{" "}
                <a href="https://members.loria.fr/Stephan.Merz/">
                    Stephan Merz
                </a>{" "}
                : Vérification formelle en Isabelle(HOL) d'un algorithme
                calculant les composantes fortement connexes d'un graphe
            </li>
            <li>
                Participation à l’
                <a href="https://adventofcode.com">Advent of Code 2021</a> : 1er
                sur un classement privé regroupant une cinquantaine d’élèves et
                quelques professeurs à l’École des Mines. Meilleur classement
                mondial : 200 sur environ 230000 participants
            </li>
            <li>
                Projet de simulation informatique d’un trafic autoroutier,
                modélisation et interface interactive, direction d’une équipe de
                6 personnes
            </li>
        </ul>

        <h3>CPGE Scientifique</h3>
        <h4>2018 — 2020</h4>
        <h4>Lycée Pothier, Orléans, France</h4>
        <ul>
            <li>MPSI puis MP* option informatique</li>
        </ul>

        <h3>Lycée général</h3>
        <h4>2016 — 2018</h4>
        <h4>Lycée Charles Péguy, Orléans, France</h4>
        <ul>
            <li>
                Filière Scientifique, option mathématiques
                <br />
                Baccalauréat Scientifique, Mention Européenne Anglais, Mention
                Très Bien avec félicitations du jury
            </li>
        </ul>
    </div>
);

const sectionExperience = (
    <div className="cv-content">
        <h3>Clearsy</h3>
        <h4>Aix-en-Provence, France</h4>
        <h4>Juin 2022 — Septembre 2022</h4>
        <ul>
            <li>
                Stage d'assistant ingénieur en méthodes formelles :
                justification formelle en B de la validité et la sécurité des
                aspects exécution en temps réel de la{" "}
                <a href="https://www.clearsy.com/outils/clearsy-safety-platform/">
                    Clearsy Safety Platform
                </a>
                .
            </li>
        </ul>

        <h3>Valve Précision</h3>
        <h4>Saint-Michel-sur-Orge, France</h4>
        <h4>Juin 2021 — Juillet 2021</h4>
        <ul>
            <li>
                Stage opérateur : outilleur et opérateur sur des presses
                hydrauliques pour fabriquer des coupelles de valve aérosol
            </li>
        </ul>

        <h3>Professeur particulier</h3>
        <h4>Occasionnel</h4>
        <ul>
            <li>
                Mathématiques, physique et informatique, plus de dix élèves
                entre 3e et bac+2
            </li>
        </ul>

        <h3>Photographe</h3>
        <h4>Occasionnel</h4>
        <ul>
            <li>
                Photos de produits réalisées pour des clients comme{" "}
                <a href="https://justonecard.fr/">JustOneCard</a> ou l'École des
                Mines de Nancy.
            </li>
            <li>
                Portraits officiels de membres d'associations comme le{" "}
                <a href="https://www.est-horizon.com/">Forum Est Horizon</a> ou{" "}
                <a href="https://www.tedxminesnancy.com/">Tedx Mines Nancy</a>
            </li>
            <li>
                Couverture d'événements comme le concert{" "}
                <a href="https://www.facebook.com/Le-P%C3%A8re-No%C3%ABl-est-un-Rockeur-141759285867084/">
                    Le Père Noël est un Rockeur
                </a>
                , dit le "Perno", dont l'entrée est gratuite et le but est de
                récolter des jouets qui sont distribués à des enfants
                défavorisés.
            </li>
        </ul>
    </div>
);

const CV = () => {
    const out = (
        <div className="cv-wrapper">
            <div className="cv-title">
                <h1>Vincent Trélat — CV</h1>
                <div className="download-button-container">
                    <img src="" />
                    <a
                        className="download-link"
                        href="https://github.com/VTrelat/website/raw/main/img/cv.pdf"
                        target="_blank"
                    >
                        .getPDF()
                    </a>
                </div>
            </div>
            <div className="cv-container">
                <CVitem
                    title="Profil"
                    content={sectionProfile}
                    logo={
                        "https://img.icons8.com/ios-glyphs/344/user-male-circle.png"
                    }
                    img={
                        "https://raw.githubusercontent.com/VTrelat/website/main/img/photocv.jpg"
                    }
                />
                <CVitem
                    title="Formation"
                    content={sectionEducation}
                    logo={
                        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png"
                    }
                    img={
                        "https://mines-nancy.univ-lorraine.fr/wp-content/uploads/2018/03/MinesNancy_Galerie3-2100x900.jpg"
                    }
                />
                <CVitem
                    title="Expérience"
                    logo={"http://cdn.onlinewebfonts.com/svg/img_406242.png"}
                    content={sectionExperience}
                    img={
                        "https://www.clearsy.com/wp-content/uploads/2021/02/clearsy-safety.jpg"
                    }
                />
            </div>
            <a className="back-button" href="../">
                .homepage()
            </a>
        </div>
    );
    return out;
};

export default CV;
