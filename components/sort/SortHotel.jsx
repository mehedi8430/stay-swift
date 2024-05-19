const SortHotel = () => {

    return (
        <div>
            <h3 className="font-bold text-lg">Sort By</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label for="highToLow">
                    <input type="radio" name="highToLow" id="highToLow" className="mr-1" />
                    Price High to Low
                </label>

                <label for="lowToHigh">
                    <input type="radio" name="lowToHigh" id="lowToHigh" className="mr-1" />
                    Price Low to high
                </label>
            </form>
        </div>
    );
};

export default SortHotel;
