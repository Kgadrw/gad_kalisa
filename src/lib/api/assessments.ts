/**
 * Assessments API Service
 * Base URL: https://starhawk-backend-agriplatform.onrender.com/api/v1/assessments
 * 
 * All endpoints require authentication via Bearer token
 */

const BASE_URL = 'https://starhawk-backend-agriplatform.onrender.com/api/v1/assessments';

// Types
export interface Assessment {
  id: string;
  farmId: string;
  assessorId: string;
  status?: string;
  riskScore?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateAssessmentRequest {
  farmId: string;
  assessorId: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface ApiError {
  message: string;
  error?: string;
  statusCode?: number;
}

/**
 * Get authentication token from localStorage
 */
const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

/**
 * Create headers with authentication
 */
const getHeaders = (): HeadersInit => {
  const token = getToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

/**
 * Handle API response
 */
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: response.statusText,
      statusCode: response.status,
    }));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

/**
 * 1. Create Assessment (Insurer Only)
 * POST /api/v1/assessments
 */
export const createAssessment = async (
  data: CreateAssessmentRequest
): Promise<ApiResponse<Assessment>> => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    return handleResponse<ApiResponse<Assessment>>(response);
  } catch (error) {
    console.error('❌ Error creating assessment:', error);
    throw error;
  }
};

/**
 * 2. Get All Assessments (Role-Based)
 * GET /api/v1/assessments
 */
export const getAssessments = async (): Promise<ApiResponse<Assessment[]>> => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: getHeaders(),
    });

    return handleResponse<ApiResponse<Assessment[]>>(response);
  } catch (error) {
    console.error('❌ Error fetching assessments:', error);
    throw error;
  }
};

/**
 * 3. Get Assessment by ID
 * GET /api/v1/assessments/{id}
 */
export const getAssessmentById = async (
  id: string
): Promise<ApiResponse<Assessment>> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'GET',
      headers: getHeaders(),
    });

    return handleResponse<ApiResponse<Assessment>>(response);
  } catch (error) {
    console.error('❌ Error fetching assessment:', error);
    throw error;
  }
};

/**
 * 4. Update Assessment (Assessor Only)
 * PUT /api/v1/assessments/{id}
 */
export const updateAssessment = async (
  id: string,
  updateData: Partial<Assessment>
): Promise<ApiResponse<Assessment>> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(updateData),
    });

    return handleResponse<ApiResponse<Assessment>>(response);
  } catch (error) {
    console.error('❌ Error updating assessment:', error);
    throw error;
  }
};

/**
 * 5. Calculate Risk Score (Assessor Only)
 * POST /api/v1/assessments/{id}/calculate-risk
 */
export const calculateRiskScore = async (
  id: string
): Promise<ApiResponse<Assessment>> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/calculate-risk`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({}),
    });

    return handleResponse<ApiResponse<Assessment>>(response);
  } catch (error) {
    console.error('❌ Error calculating risk:', error);
    throw error;
  }
};

/**
 * 6. Submit Assessment (Assessor Only)
 * POST /api/v1/assessments/{id}/submit
 */
export const submitAssessment = async (
  id: string
): Promise<ApiResponse<Assessment>> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/submit`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({}),
    });

    return handleResponse<ApiResponse<Assessment>>(response);
  } catch (error) {
    console.error('❌ Error submitting assessment:', error);
    throw error;
  }
};

/**
 * Authentication helper
 * Store token after login
 */
export const setAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

/**
 * Remove authentication token
 */
export const removeAuthToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return getToken() !== null;
};

