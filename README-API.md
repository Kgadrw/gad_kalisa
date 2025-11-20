# 🌾 Assessments API Integration Guide

This project includes a complete API service for the Starhawk Agricultural Platform Assessments API.

## 📁 Files

- `src/lib/api/assessments.ts` - Main API service with all endpoints
- `src/lib/api/assessments.example.tsx` - Example React component demonstrating usage

## 🚀 Quick Start

### 1. Install Dependencies (if using axios)

```bash
npm install axios
# or
yarn add axios
```

**Note:** The current implementation uses the native `fetch` API, so no additional dependencies are required.

### 2. Authentication Setup

First, you need to authenticate and store the token:

```typescript
import { setAuthToken } from '@/lib/api/assessments';

// After successful login
const response = await fetch('/api/v1/auth/login', {
  method: 'POST',
  body: JSON.stringify({ email, password }),
});

const { token } = await response.json();
setAuthToken(token); // Stores token in localStorage
```

### 3. Use the API Service

```typescript
import {
  getAssessments,
  createAssessment,
  getAssessmentById,
  updateAssessment,
  calculateRiskScore,
  submitAssessment,
} from '@/lib/api/assessments';

// Get all assessments
const assessments = await getAssessments();
console.log(assessments.data);

// Create new assessment
const newAssessment = await createAssessment({
  farmId: 'farm-123',
  assessorId: 'assessor-456',
});

// Get assessment by ID
const assessment = await getAssessmentById('assessment-id');

// Update assessment
const updated = await updateAssessment('assessment-id', {
  status: 'in-progress',
});

// Calculate risk score
const riskScore = await calculateRiskScore('assessment-id');

// Submit assessment
const submitted = await submitAssessment('assessment-id');
```

## 📋 Available Functions

### `createAssessment(data: CreateAssessmentRequest)`
Creates a new farm assessment. **Insurer Only**

### `getAssessments()`
Retrieves all assessments (role-based). Returns array of assessments.

### `getAssessmentById(id: string)`
Gets a specific assessment by ID.

### `updateAssessment(id: string, updateData: Partial<Assessment>)`
Updates an assessment. **Assessor Only**

### `calculateRiskScore(id: string)`
Calculates risk score for an assessment. **Assessor Only**

### `submitAssessment(id: string)`
Submits an assessment for final review. **Assessor Only**

## 🔒 Authentication Helpers

```typescript
import {
  setAuthToken,
  removeAuthToken,
  isAuthenticated,
} from '@/lib/api/assessments';

// Store token
setAuthToken('your-jwt-token');

// Check if authenticated
if (isAuthenticated()) {
  // User is logged in
}

// Remove token (logout)
removeAuthToken();
```

## 🎯 React Hook Example

```tsx
import { useEffect, useState } from 'react';
import { getAssessments, type Assessment } from '@/lib/api/assessments';

export function useAssessments() {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        setLoading(true);
        const response = await getAssessments();
        setAssessments(response.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    };

    fetchAssessments();
  }, []);

  return { assessments, loading, error };
}
```

## ⚠️ Error Handling

All functions throw errors that should be caught:

```typescript
try {
  const response = await getAssessments();
  // Handle success
} catch (error) {
  console.error('API Error:', error);
  // Handle error (show toast, redirect, etc.)
}
```

## 🔗 Base URL

```
https://starhawk-backend-agriplatform.onrender.com/api/v1/assessments
```

## 📝 Types

All TypeScript types are exported from the service file:

- `Assessment` - Assessment object structure
- `CreateAssessmentRequest` - Request body for creating assessments
- `ApiResponse<T>` - Generic API response wrapper
- `ApiError` - Error response structure

## 🛠️ Customization

To modify the base URL or add custom headers, edit `src/lib/api/assessments.ts`:

```typescript
const BASE_URL = 'your-custom-url';

const getHeaders = (): HeadersInit => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`,
    // Add custom headers here
    'X-Custom-Header': 'value',
  };
  return headers;
};
```

