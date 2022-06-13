import { useInfiniteQuery } from "react-query"
import axios from "axios"

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

function InfiniteQueries() {
  const { isLoading, isError, error, data, hasNextPage,
  fetchNextPage, isFetchingNextPage,  isFetching } = useInfiniteQuery("colors", 
    fetchColors,
    {
      getNextPageParam: (_lastpage, pages) => {
        if(pages.length < 4){
          return pages.length + 1 
        } else return undefined;
      }
    }
  )

  return (
    <div>
      <h2 className="title">Infinite Queries</h2>

      {isError && <div>{error.message}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.pages.map((group, index) => {
          return (
            <div key={index}>
              {group?.data.map(color => {
                return <div key={color.id}>{color.id} - {color.label}</div>
              })}
            </div>
          )
        })
      )}

      <button
        className="btn"
        disabled={!hasNextPage}
        onClick={fetchNextPage}
      >Load More
      </button>

      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  )
}

export default InfiniteQueries
