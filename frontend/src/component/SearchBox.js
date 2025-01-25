import React from "react";
import SearchInput from "./SearchInput";
import FilterDropdown from "./FilterDropdown";
import PaginationControls from "./PaginationControls";
import QuestionList from "./QuestionList";
import { useSearch } from "../hooks/useSearch";
import "../App.css";

const SearchBox = () => {
  const {
    query,
    setQuery,
    results,
    loading,
    error,
    type,
    setType,
    currentPage,
    setCurrentPage,
    totalPages,
    clearSearch,
    toggleSolution,
    showSolution,
  } = useSearch();

  const questionTypes = [
    "NO FILTER",
    "MCQ",
    "ANAGRAM",
    "READ_ALONG",
    "CONTENT_ONLY",
  ];

  return (
    <div className="search-box">
      <h1 id="title">QuestSearch</h1>
      <p id="description">
        <strong>
          Welcome to QuestSearch, your ultimate destination for discovering
          questions effortlessly! Instantly search, filter by type,—be it MCQs,
          anagrams, and uncover answers tailored to your curiosity. 🚀
        </strong>
      </p>
      <div id="user-input">
        <SearchInput query={query} setQuery={setQuery} id="search-input" />

        <div className="filter-clear">
          <FilterDropdown
            questionTypes={questionTypes}
            type={type}
            setType={setType}
            setCurrentPage={setCurrentPage}
            id="filter-dropdown"
          />
          <button onClick={clearSearch} id="clear-button">
            🧹 Clear Search
          </button>
        </div>
      </div>
      {results.length > 0 && (
        <PaginationControls
          className="pagination-controls"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          isDisabled={results.length === 0}
        />
      )}
      {results.length === 0 && query && !loading && (
        <p id="no-result-error">
          <sapn style={{fontSize: "1rem"}}>⛔&nbsp; </sapn>
          No results found for <strong>"{query}"</strong>. Try another search.
          
        </p>
      )}
      {loading && <p>🌀 Loading...</p>}
      {error && <p>{error}</p>}
      <QuestionList
        className="question-list"
        results={results}
        toggleSolution={toggleSolution}
        showSolution={showSolution}
        query={query}
      />
      {results.length > 0 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          isDisabled={results.length === 0}
        />
      )}
    </div>
  );
};

export default SearchBox;
