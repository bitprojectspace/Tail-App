import beforeAfter from '../../images/paintbeforeafter.jpg';
export default function PastJob() {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg w-4/12 mx-0 my-1">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-bold leading-6 text-gray-900">Exterior Paint Job</h3>
            </div>
            <img src={beforeAfter} alt="paintBeforeAndAfter" />
        </div>
    )
}
