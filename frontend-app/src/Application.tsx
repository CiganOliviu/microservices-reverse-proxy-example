import React from 'react';
import styled from 'styled-components';
import useFetch from "./backend/useFetch";

type ApiResponse = {
    id: string;
    name: string;
    data: {
        [key: string]: string | number | undefined;
    } | null;
};

const ContentWrapper = styled.div`
    padding: 2rem;
`;

const Application = () => {
    const { data, loading, error } = useFetch<ApiResponse[]>('http://localhost:3001/api/data');

    if (loading) {
        return (
            <ContentWrapper>
                Loading...
            </ContentWrapper>
        );
    }

    if (error) {
        return (
            <ContentWrapper>
                Error: {error}
            </ContentWrapper>
        );
    }

    return (
        <ContentWrapper>
            {data?.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{JSON.stringify(item.data)}</p>
                    </div>
                );
            })}
        </ContentWrapper>
    );
}

export default Application;
