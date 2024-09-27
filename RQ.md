
# **React Query Overview**

**React Query** is a robust data-fetching and state management library for React applications. It makes managing server-side data much easier by automatically handling caching, refetching, error states, and more.

---

## **What React Query Does**

- **Simplifies Data Fetching**: React Query abstracts away the complexity of managing API calls, loading states, and error handling, reducing boilerplate code.
  
- **Caching**: Automatically caches API responses to avoid redundant requests, improving performance and user experience.

- **Background Refetching**: Keeps data fresh by refetching it in the background without disturbing the user’s experience.

- **Stale-While-Revalidate**: Serves cached data while simultaneously updating it in the background, ensuring fast UI responses.

- **Pagination & Infinite Queries**: Provides built-in support for paginated or infinite scrolling data fetching.

---

## **Key Features**

### 1. **QueryClient**
The core manager that handles all the queries, mutations, and caching logic for your application. It tracks the status of queries and handles configuration for refetching, retries, and caching policies.

### 2. **QueryClientProvider**
A provider component that wraps your app, giving access to the `QueryClient` and enabling React Query’s functionalities across all components within the app.

### 3. **useQuery**
A hook used for data fetching. It:
- Automatically tracks loading, error, and success states.
- Caches fetched data.
- Refetches data in the background when it becomes stale or when needed.
  
### 4. **Automatic Data Synchronization**
React Query keeps UI data synchronized with server-side data by triggering refetches based on configuration (e.g., when the app regains focus, reconnects to the internet, or after a set interval).

---

## **Why React Query is Better**

- **Reduced Boilerplate**: Eliminates the need for manual handling of loading, success, and error states with `useState` and `useEffect`.
- **Better Performance**: Improves app performance by caching and minimizing redundant network requests.
- **Simplified State Management**: Handles complex scenarios like pagination, background updates, and retries with minimal configuration.
- **Optimized for UX**: Provides a smoother user experience by serving cached data instantly and silently refetching fresh data in the background.

---

React Query is highly flexible and helps in simplifying asynchronous operations, allowing developers to focus on building features rather than managing data-fetching complexities.



```javascript
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './App.css';
import React from 'react';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>
    </>
  )
}

export default App
const fetchPosts = async (page) => {

  const data = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=4`)
  return data

}

function Posts() {

  const [page, setPage] = React.useState(1);

  const { isError, isLoading, data, error, isFetching } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => fetchPosts(page)
  })

  console.log(data, error)
  if (isError) {
    return <div>Error ... {error}</div>
  }

  if (isLoading) {
    return <div>Loading .......</div>
  }

  if (isFetching) {
    return <div>Fetching data for Next page ........</div>
  }

  return <>
    {
      data.data.map((p, i) => {
        return (
          <>
            <div key={i}>
              <p>Title : {p.title}</p>
            </div>

          </>
        )
      })
    }
    <div>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={isFetching}>Prev</button>
      <button onClick={() => setPage((prev) => prev + 1)} disabled={isFetching}>Next</button>
    </div>
  </>

}
```






