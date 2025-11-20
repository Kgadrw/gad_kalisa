/**
 * Example React Component using Assessments API
 * This demonstrates how to use the API service in a React component
 */

'use client';

import React, { useEffect, useState } from 'react';
import {
  getAssessments,
  getAssessmentById,
  createAssessment,
  updateAssessment,
  calculateRiskScore,
  submitAssessment,
  type Assessment,
} from './assessments';

export default function AssessmentsExample() {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all assessments on component mount
  useEffect(() => {
    const fetchAssessments = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getAssessments();
        setAssessments(response.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch assessments');
      } finally {
        setLoading(false);
      }
    };

    fetchAssessments();
  }, []);

  // Example: Create new assessment
  const handleCreateAssessment = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await createAssessment({
        farmId: 'farm-123',
        assessorId: 'assessor-456',
      });
      console.log('✅ Assessment created:', response.data);
      // Refresh assessments list
      const updated = await getAssessments();
      setAssessments(updated.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create assessment');
    } finally {
      setLoading(false);
    }
  };

  // Example: Get assessment by ID
  const handleGetAssessment = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAssessmentById(id);
      console.log('✅ Assessment details:', response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch assessment');
    } finally {
      setLoading(false);
    }
  };

  // Example: Calculate risk score
  const handleCalculateRisk = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await calculateRiskScore(id);
      console.log('✅ Risk calculated:', response.data);
      // Refresh assessments list
      const updated = await getAssessments();
      setAssessments(updated.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to calculate risk');
    } finally {
      setLoading(false);
    }
  };

  // Example: Submit assessment
  const handleSubmitAssessment = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await submitAssessment(id);
      console.log('✅ Assessment submitted:', response.data);
      // Refresh assessments list
      const updated = await getAssessments();
      setAssessments(updated.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit assessment');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading assessments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assessments</h1>
      
      <button
        onClick={handleCreateAssessment}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create New Assessment
      </button>

      <div className="space-y-4">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="p-4 border rounded">
            <h2 className="font-semibold">Assessment {assessment.id}</h2>
            <p>Farm ID: {assessment.farmId}</p>
            <p>Assessor ID: {assessment.assessorId}</p>
            {assessment.riskScore && <p>Risk Score: {assessment.riskScore}</p>}
            {assessment.status && <p>Status: {assessment.status}</p>}
            
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleGetAssessment(assessment.id)}
                className="px-3 py-1 bg-gray-600 text-white rounded text-sm"
              >
                View Details
              </button>
              <button
                onClick={() => handleCalculateRisk(assessment.id)}
                className="px-3 py-1 bg-yellow-600 text-white rounded text-sm"
              >
                Calculate Risk
              </button>
              <button
                onClick={() => handleSubmitAssessment(assessment.id)}
                className="px-3 py-1 bg-green-600 text-white rounded text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

