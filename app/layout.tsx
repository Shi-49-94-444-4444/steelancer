import "./globals.css"
import { Navbar, ClientOnly, Background, ModalEdit, QrMomo, ModalCreate, ModalPayment } from "./components"
import ToasterProvider from "./providers/ToasterProvider"
import { createContext, useContext, useEffect, useState } from "react"
import FreelancerResponse from "@/models/freelancerResponse"
import CategoryResponse from "@/models/categoryResponse"
import FreelancerService from '../services/freelancerProfiles'
import CategoryService from '../services/category'
import AuthService, { UserInfo } from '../services/auth'
import ContextValue from "@/models/contextValue"

export const metadata = {
  title: 'Steelancer',
  description: 'Steelancer clone',
}

const defaultUser = {
  Id: 0,
  Username: "",
  Email: "",
  Role: "",
  IsPremium: false
}

const defaultFreelancer = {
  Id: 0,
  Title: "",
  Description: "",
  Categories: [],
  Price: 0,
  Fullname: "",
  ImageUrl: "",
  Address: ""
};

export const MyContext = createContext<ContextValue>({
  currentUser: defaultUser,
  setCurrentUser: null,
  currentFreelancer: defaultFreelancer,
  setCurrentFreelancer: null
});

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentUser, setCurrentUser] = useState<UserInfo>(defaultUser);
  const [, setShowEditModal] = useState(false);
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [currentFreelancer, setCurrentFreelancer] = useState<FreelancerResponse>(defaultFreelancer);


  const getCategoriesStrings = (freelancer: FreelancerResponse): string[] => {
    const categoryIds = freelancer.Categories;
    return categoryIds.map(cId => `${categories.find(c => c.Id === cId)?.Name}`);
  }

  useEffect(() => {
    CategoryService.get()
      .then(categoriesResponse => {
        setCategories(categoriesResponse.value);
      })
      .catch(error => {
        console.log(error);
      })
    // try {
    //   const userInfo = AuthService.getUserInfo();
    //   setCurrentUser(userInfo);
    // } catch (error) {
    //   console.log(error)
    // }

    AuthService.getUserProfile()
      .then(profileResponse => {
        console.log(profileResponse);
        setCurrentUser(profileResponse);
      })
      .catch(error => {
        console.log("No user");
      })
  }, [])

  useEffect(() => {
    console.log("Current user: ", currentUser)
    if (currentUser.Role === "Freelancer") {
      FreelancerService.getThisUserFreelancerProfile(currentUser.Id)
        .then(freelancerProfileResponse => {
          if (freelancerProfileResponse.value.length > 0) {
            setCurrentFreelancer(freelancerProfileResponse.value[0]);
          }
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
  }, [currentUser])

  type ModalEditData = Partial<typeof currentFreelancer>;

  const handleEditModalSubmit = (formData: ModalEditData = {}) => {
    setShowEditModal(true);
  };

  return (
    <ClientOnly>
      <Background>
        <MyContext.Provider value={{
          currentUser,
          setCurrentUser,
          currentFreelancer,
          setCurrentFreelancer
        }}>
          <ToasterProvider />
          <QrMomo />
          <ModalEdit
            onSave={handleEditModalSubmit}
            categories={getCategoriesStrings(currentFreelancer)}
          />
          <ModalCreate />
          <ModalPayment />
          <Navbar />
          {children}
        </MyContext.Provider>
      </Background>
    </ClientOnly>
  )
}
