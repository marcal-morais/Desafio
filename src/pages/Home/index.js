import DefaultLayout from '../../components/DefaultLayout';
import Summary from '../../components/Summary';
import ServersTable from '../../components/ServersTable';



function Home() {

  return (
    <DefaultLayout>
      <Summary />
      <ServersTable />
    </DefaultLayout>
  );
}

export default Home;