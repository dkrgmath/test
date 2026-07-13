"use client";

import { tss } from "tss-react";

import Typo from "@/typography";
import SectionHeading from "@/layout-components/section/SectionHeading";
import Colors from "@/constants/Colors";
import { ON_MOBILE_PHONE, ON_MEDIUM_SCREEN } from "@/constants/MediaQuery";

type Step = {
    id: string;
    number: string;
    title: string;
    description: string;
};

const steps: Step[] = [
    {
        id: "admission",
        number: "01",
        title: "Admission",
        description:
            "Un entretien pour comprendre votre projet et valider vos prérequis. Aucun diplôme exigé, seulement votre motivation.",
    },
    {
        id: "formation",
        number: "02",
        title: "Formation",
        description:
            "Un parcours intensif encadré par des experts du métier. Projets concrets, pratique quotidienne, montée en compétences rapide.",
    },
    {
        id: "certification",
        number: "03",
        title: "Certification",
        description:
            "Validez vos acquis par une certification reconnue sur le marché. Une preuve tangible de votre expertise.",
    },
    {
        id: "insertion",
        number: "04",
        title: "Insertion",
        description:
            "Accédez à notre réseau d'entreprises partenaires. 85% de nos apprenants décrochent un poste en 6 mois.",
    },
];

export default function ParcoursSection() {
    const { classes } = useStyles();

    return (
        <section id="parcours" className={classes.section}>
            <div className={classes.container}>
                <SectionHeading
                    title="Votre parcours"
                    description="De la première prise de contact à votre premier poste, un accompagnement structuré en quatre étapes."
                />

                <div className={classes.timeline}>
                    {/* Ligne de connexion horizontale */}
                    <div className={classes.connector} />

                    {steps.map((step) => (
                        <div key={step.id} className={classes.step}>
                            <div className={classes.dot}>
                                <span className={classes.number}>{step.number}</span>
                            </div>

                            <Typo.H4 type="semi-bold" className={classes.stepTitle}>
                                {step.title}
                            </Typo.H4>

                            <Typo.Text size="m" type="regular" className={classes.stepText}>
                                {step.description}
                            </Typo.Text>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const useStyles = tss.create({
    section: {
        position: "relative",
        backgroundColor: Colors.SOFT_BLACK,
        paddingTop: "96px",
        paddingBottom: "96px",
        overflow: "hidden",
        [ON_MOBILE_PHONE]: {
            paddingTop: "64px",
            paddingBottom: "64px",
        },
    },

    container: {
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "24px",
        paddingRight: "24px",
        boxSizing: "border-box",
    },

    // --- Timeline ---
    timeline: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
        marginTop: "64px",
        [ON_MEDIUM_SCREEN]: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "48px",
        },
        [ON_MOBILE_PHONE]: {
            gridTemplateColumns: "1fr",
            gap: "40px",
        },
    },

    // Ligne horizontale qui relie les étapes
    connector: {
        position: "absolute",
        top: "28px", // moitié de la hauteur des pastilles (56px)
        left: "12.5%", // centre de la 1re colonne sur 4
        right: "12.5%", // centre de la 4e colonne sur 4
        height: "2px",
        background: `linear-gradient(90deg, ${Colors.PURPLE} 0%, rgba(121, 106, 243, 0.3) 100%)`,
        zIndex: 0,
        [ON_MEDIUM_SCREEN]: {
            display: "none", // pas de ligne quand les étapes s'empilent
        },
    },

    // --- Étape ---
    step: {
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },

    dot: {
        width: "56px",
        height: "56px",
        borderRadius: "9999px",
        backgroundColor: Colors.SOFT_BLACK,
        border: `2px solid ${Colors.PURPLE}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        boxSizing: "border-box",
        transition: "all 300ms",
        "&:hover": {
            backgroundColor: Colors.PURPLE,
            transform: "scale(1.08)",
        },
    },

    number: {
        fontSize: "1rem",
        fontWeight: 700,
        color: Colors.PURPLE,
        letterSpacing: "0.025em",
    },

    stepTitle: {
        margin: 0,
        marginBottom: "10px",
        fontSize: "1.125rem",
        color: Colors.WHITE,
        letterSpacing: "0.025em",
    },

    stepText: {
        margin: 0,
        fontSize: "0.875rem",
        color: "rgba(226, 232, 240, 0.7)",
        lineHeight: 1.6,
        maxWidth: "240px",
    },
});
