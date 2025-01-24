import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState("NO FILTER");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [showSolution, setShowSolution] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      setCurrentPage(1);
    }
  }, [debouncedQuery]);

  const getQuestions = useCallback(
    async (page, searchQuery, type) => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.post("http://localhost:5000/api/search", {
          query: searchQuery || undefined,
          type: type !== "NO FILTER" ? type : undefined,
          page,
          limit: 10,
        });
        const questions = response.data.questions.map((question) => {
          if (question.type === "ANAGRAM") {
            const shuffled = shuffleArray([...question.blocks]);
            return { ...question, shuffledBlocks: shuffled };
          }
          return question;
        });

        setResults(questions);
        setTotalPages(Math.ceil(response.data.total / 10));
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getQuestions(currentPage, debouncedQuery, type);
  }, [currentPage, debouncedQuery, getQuestions, type]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const toggleSolution = (id) => {
    setShowSolution((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const clearSearch = () => {
    setQuery("");
    setDebouncedQuery("");
    setResults([]);
    setType("NO FILTER");
    setError("");
    setCurrentPage(1);
    setTotalPages(0);
    getQuestions(1, "", "NO FILTER");
  };

  return {
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
  };
};
