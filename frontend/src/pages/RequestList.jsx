import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const RequestList = () => {

  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [error, setError] = useState('');

  // ✅ Correct useEffect
  useEffect(() => {

    const fetchRequests = async () => {

      try {

        const { data } = await api.get('/requests');

        console.log(data);

        if (data.success) {
          setRequests(data.data || []);
        }

      } catch (err) {

        console.error(err);
        setError('Failed to load requests.');

      } finally {

        setLoading(false);

      }
    };

    fetchRequests();

  }, []);

  // Delete request
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this request?'
    );

    if (!confirmDelete) return;

    try {

      await api.delete(`/requests/${id}`);

      setRequests((prev) =>
        prev.filter((r) => r.id !== id)
      );

      alert('Request deleted successfully!');

    } catch (err) {

      console.error(err);
      alert('Failed to delete request.');

    }
  };

  // Filter requests
  const filtered =
    filter === 'All'
      ? requests
      : requests.filter(
          (r) => r.status === filter
        );

  // Status badge
  const getStatusBadge = (status) => {

    const classes = {
      'Pending': 'badge badge-pending',
      'In Progress': 'badge badge-inprogress',
      'Completed': 'badge badge-completed',
      'Cancelled': 'badge badge-cancelled'
    };

    return (
      <span className={classes[status] || 'badge'}>
        {status || 'Unknown'}
      </span>
    );
  };

  // Loading
  if (loading) {

    return (
      <div className="page-wrapper">
        <div className="container">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (

    <div className="page-wrapper">

      <div className="container">

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '24px'
          }}
        >

          <div>

            <h1
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.6rem',
                color: '#1A1A2E'
              }}
            >
              My Requests
            </h1>

            <p style={{ color: '#6B7280' }}>
              {requests.length} total request
              {requests.length !== 1 ? 's' : ''}
            </p>

          </div>

          <Link
            to="/create-request"
            className="btn btn-primary"
          >
            + New Request
          </Link>

        </div>

        {/* Error */}
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}
        >

          {[
            'All',
            'Pending',
            'In Progress',
            'Completed',
            'Cancelled'
          ].map((s) => (

            <button
              key={s}
              onClick={() => setFilter(s)}
            >
              {s}
            </button>

          ))}

        </div>

        {/* Empty */}
        {filtered.length === 0 ? (

          <div className="card">

            <p>
              {filter === 'All'
                ? 'No requests yet.'
                : `No ${filter} requests.`}
            </p>

          </div>

        ) : (

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >

            {filtered.map((req) => (

              <div
                key={req.id}
                className="card"
              >

                <h3>
                  {req.title || 'Untitled'}
                </h3>

                {getStatusBadge(req.status)}

                <p>
                  {req.description?.length > 100
                    ? req.description.slice(0, 100) + '...'
                    : req.description || 'No description'}
                </p>

                <button
                  onClick={() =>
                    navigate(`/requests/${req.id}/edit`)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(req.id)
                  }
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default RequestList;