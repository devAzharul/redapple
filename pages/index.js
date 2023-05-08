import Menu from "@/src/components/Menu/Menu";
import Layout from "./Layout/Layout";
import Clients from "@/src/components/Clients/Clients";




export default function () {
  return (
    <Layout title="Home">
      <Menu />
      <Clients />
    </Layout>


  )
}
