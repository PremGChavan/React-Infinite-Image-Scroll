import { useEffect, useReducer, useCallback, useRef } from "react";
import unsplash from "./api/unsplash";
import { initialState, imageReducer } from "./reducer/ImageReducer";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [state, dispatch] = useReducer(imageReducer, initialState);
  const isFetching = useRef(false); 

  const fetchImages = useCallback(async () => {
    isFetching.current = true; 
    dispatch({ type: "FETCH_START" });

    try {
      const response = state.query
        ? await unsplash.get("/search/photos", {
            params: {
              query: state.query,
              page: state.page,
              per_page: 15, 
            },
          })
        : await unsplash.get("/photos/random", {
            params: { count: 20 },
          });

      const data = state.query ? response.data.results : response.data;

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    } finally {
      isFetching.current = false;
    }
  }, [state.query, state.page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        !isFetching.current
      ) {
        dispatch({ type: "INCREMENT_PAGE" });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (searchQuery) => {
    dispatch({ type: "SET_QUERY", payload: searchQuery });
    
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar onSearch={handleSearch} />
      {state.error && <div className="text-center text-red-500">{state.error}</div>}
      <ImageGallery images={state.images} />
      {state.loading && <div className="text-center p-4">Loading...</div>}
    </div>
  );
}
