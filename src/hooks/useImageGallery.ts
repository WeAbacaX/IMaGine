import { useState, useEffect } from "react";
import { apiFetch } from "../services/ApiService";

export interface GalleryImage {
  id: string;
  publicId: string;
  title: string;
  category: string;
}

export const useImageGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        const folders = [
          // Pacote Especiais
          {
            path: "ALApp/11022025-aleatoriedade",
            title: "",
            category: "Aleatóriedade",
          },
          {
            path: "ALApp/9880-nossofunkao",
            title: "",
            category: "Nosso Fusketão",
          },
          // Pacote comum
          {
            path: "ALApp/45-",
            title: "21/02/2025",
            category: "Dia de Tatoo",
          },
          {
            path: "ALApp/44-passeiocomaaninha",
            title: "14/02/2025",
            category: "Passeio Com A Aninha",
          },
          {
            path: "ALApp/43-aniversariodenamoro",
            title: "08/02/2025",
            category: "Aniversario De Namoro 1#",
          },
          {
            path: "ALApp/42-feliz2026",
            title: "01/01/2026",
            category: "Ano Novo!!!",
          },
          {
            path: "ALApp/41-entaoemetal",
            title: "25/12/2025",
            category: "Então é METAL",
          },
          {
            path: "ALApp/40-tatoodele",
            title: "13/12/2025",
            category: "dia de Tatoo dele",
          },
          {
            path: "ALApp/39-bailaootaku",
            title: "08/12/2025",
            category: "Bailão Otaku",
          },
          {
            path: "ALApp/38-diadepiscininha",
            title: "01/12/2025",
            category: "Dia de Piscinhinha",
          },
          {
            path: "ALApp/36-noiteradical",
            title: "03/11/2025",
            category: "No Parque de Diversão",
          },
          {
            path: "ALApp/37-Halloween1terrornafacudade",
            title: "31/10/2025",
            category: "Noite da Halloween",
          },
          {
            path: "ALApp/35-noitealuzdevelas",
            title: "24/10/2025",
            category: "Noite no CandleLlight",
          },
          {
            path: "ALApp/34-diadepraia2oretorno",
            title: "19/10/2025",
            category: "Dia de Praia 2",
          },
          {
            path: "ALApp/33-festivalderock",
            title: "05/10/2025",
            category: "Festival de Rock",
          },
          {
            path: "ALApp/32-passeiodasveias",
            title: "23/09/2025",
            category: "Passeio Das Véias",
          },
          {
            path: "ALApp/31-Feirinha",
            title: "07/09/2025",
            category: "Feirinha",
          },
          {
            path: "ALApp/30-rocknocorreria",
            title: "31/08/2025",
            category: "Rock no correria",
          },
          {
            path: "ALApp/29-ViajemParaEmPiuma",
            title: "03/08/2025",
            category: "Aniversario Da Mamãe Dela",
          },
          {
            path: "ALApp/28-lualcomosamigos",
            title: "25/07/2025",
            category: "Lual com os Amigos",
          },
          {
            path: "ALApp/27-aniversariodajanja",
            title: "21/07/2025",
            category: "Aniversario da Janja",
          },
          {
            path: "ALApp/26-DateNaMerceariaLiberdade",
            title: "18/07/2025",
            category: "Date No Mercado Liberdade",
          },
          {
            path: "ALApp/25-festgastronomia",
            title: "15/07/2025",
            category: "Rolê no FestGastronomia",
          },
          {
            path: "ALApp/24-DiaDosNamorados",
            title: "12/06/2025",
            category: "Dia Dos Namorados",
          },
          {
            path: "ALApp/23-ArraiaDoBeco",
            title: "07/06/2025",
            category: "Arraia Do Becô",
          },
          {
            path: "ALApp/22-ArraiaDaAline",
            title: "06/06/2025",
            category: "Arraia Da Aline",
          },
          {
            path: "ALApp/21-RoleNoMotoClube",
            title: "31/05/2025",
            category: "Role No Moto Clube",
          },
          {
            path: "ALApp/20-AniversarioDaAmiga",
            title: "25/05/2025",
            category: "Aniversario Da Amiga",
          },
          {
            path: "ALApp/19-DiaDeCinema",
            title: "23/05/2025",
            category: "Dia De Cinema",
          },
          {
            path: "ALApp/18-DiaDePizza",
            title: "17/05/2025",
            category: "Dia De Pizza",
          },
          {
            path: "ALApp/17-NaPracaDosNamorados",
            title: "10/05/2025",
            category: "Na Praça Dos Namorados",
          },
          {
            path: "ALApp/16-PasseioEmFamilia",
            title: "03/05/2025",
            category: "Passeio Em Familia",
          },
          {
            path: "ALApp/15-Feriadin",
            title: "21/04/2025",
            category: "Feriadin",
          },
          {
            path: "ALApp/14-AniversarioDelaPart2",
            title: "10/04/2025",
            category: "Aniversario Dela Parte 2",
          },
          {
            path: "ALApp/13-AniversarioDelaPart1",
            title: "05/04/2025",
            category: "Aniversario Dela Parte 1",
          },
          {
            path: "ALApp/12-AniversarioDele",
            title: "15/03/2025",
            category: "Aniversario Dele",
          },
          {
            path: "ALApp/11-DiaDeArtesNoParque",
            title: "08/03/2025",
            category: "Dia De Artes No Parque",
          },
          {
            path: "ALApp/10-DiaDeTatooDela",
            title: "05/03/2025",
            category: "Dia De Tatoo Dela",
          },
          {
            path: "ALApp/8-BateVolta",
            title: "29/02/2025",
            category: "Bate e Volta S2 ",
          },
          {
            path: "ALApp/7-PedidoDeNamoro",
            title: "28/02/2025",
            category: "Pedido De Namoro",
          },
          {
            path: "ALApp/6-RoleDeSkate",
            title: "14/02/2025",
            category: "Role De Skate",
          },
          {
            path: "ALApp/5-DateNoBrizz",
            title: "11/02/2025",
            category: "Date No Brizz",
          },
          {
            path: "ALApp/4-DiaDeSol",
            title: "25/01/2025",
            category: "Dia De Sol",
          },
          {
            path: "ALApp/3-Piniquenique",
            title: "18/01/2025",
            category: "Piquinique",
          },
          {
            path: "ALApp/2-DateNoParque",
            title: "06/01/2025",
            category: "Date No Parque",
          },
          {
            path: "ALApp/1-ComoTudoComecou",
            title: "07/12/2024",
            category: "Como Tudo Começou",
          },
        ];

        let allImages: GalleryImage[] = [];

        for (const folder of folders) {
          const response = await apiFetch(`/images/${folder.path}`);
          const data = await response.json();

          const formatted = data.map((img: any) => ({
            id: img.id,
            publicId: img.publicId,
            title: folder.title,
            category: folder.category,
          }));

          allImages = [...allImages, ...formatted];
        }

        setImages(allImages);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar imagens");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getImagesByCategory = () => {
    return images.reduce((acc, image) => {
      if (!acc[image.category]) acc[image.category] = [];
      acc[image.category].push(image);
      return acc;
    }, {} as Record<string, GalleryImage[]>);
  };

  const getCategories = () => Object.keys(getImagesByCategory());

  return {
    images,
    loading,
    error,
    getImagesByCategory,
    getCategories,
  };
};
