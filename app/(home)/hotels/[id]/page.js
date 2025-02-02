import Gallery from "@/components/hotel/details/Gallery"
import Overview from "@/components/hotel/details/Overview"
import Summary from "@/components/hotel/details/Summary"
import { getHotelById } from "@/database/queries"

const HotelDetailsPage = async ({ params, searchParams }) => {
  const { id } = params;
  const { checkin, checkout } = searchParams;

  const hotelInfo = await getHotelById(id, checkin, checkout);

  return (
    <>
      <Summary hotelInfo={hotelInfo} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </>
  )
}

export default HotelDetailsPage