'use client';
import React from 'react';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface ProviderProps {
	children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default Provider;
