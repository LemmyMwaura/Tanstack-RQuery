import { useQuery } from "react-query"
import { useState } from "react"
import axios from "axios"

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

function PaginatedQueries() {
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  )

  return (
    <div>
      <h2 className="title">PaginatedQueries</h2>

      {isError && <div>{error.message}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.data.map((color) => {
          return (
            <div key={color.id}>
              {color.id} - {color.label}
            </div>
          )
        })
      )}

      <div className="btns">
        <button
          className="btn"
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((page) => page - 1)}
        >
          PrevPage
        </button>

        <button
          className="btn"
          disabled={pageNumber === 4}
          onClick={() => setPageNumber((page) => page + 1)}
        >
          NextPage
        </button>
      </div>
    </div>
  )
}

export default PaginatedQueries
