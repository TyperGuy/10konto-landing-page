'use client';

import { useEffect, useState } from 'react';

const EMAIL_TO_USE = 'joaojosetony2016@gmail.com';

export default function ModalForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: '',
    revenue: '',
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('_captcha', 'false');

    const res = await fetch(`https://formsubmit.co/${EMAIL_TO_USE}`, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        position: '',
        revenue: '',
      });
    }
  };

  const onClose = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <div style={styles.overlay}>
      <div
        style={{
          ...styles.modal,
          width: isMobile ? '95%' : 500,
          maxHeight: isMobile ? '95vh' : '90vh',
        }}
      >
        <div style={styles.header}>
          <h2 style={{ margin: 0, fontSize: 20 }}> Seja nosso parceiro</h2>
          <span style={{ fontWeight: 'normal', fontSize: 16, color: '#222' }}>
            Uma infinidade de possibilidades para o teu negócio
          </span>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <div
              style={{
                ...styles.row,
                flexDirection: isMobile ? 'column' : 'row',
              }}
            >
              <div style={styles.field}>
                <label>Nome</label>
                <input
                  name='firstName'
                  placeholder='Ex: Jane'
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label>Sobrenome</label>
                <input
                  name='lastName'
                  placeholder='Ex: Doe'
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>
            <div style={styles.field}>
              <label>Email</label>
              <input
                type='email'
                name='email'
                placeholder='Ex: emanuel.brito@marcheapp.com'
                required
                value={form.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label>Nome da Empresa</label>
              <input
                name='company'
                placeholder='Ex: MarcheApp Armazens'
                value={form.company}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label>Cargo</label>
              <input
                name='position'
                placeholder='Ex: Chefe de operações'
                value={form.position}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label>Faturação da Empresa</label>
              <input
                name='revenue'
                type='number'
                placeholder='Ex: 1000000'
                min='0'
                value={form.revenue}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <button type='submit' style={styles.submitButton}>
              Enviar
            </button>
          </form>
        ) : (
          <div
            style={{
              padding: 20,
              textAlign: 'center',
              color: 'green',
              fontSize: 18,
            }}
          >
            ✅ Sua mensagem foi enviada com sucesso!
          </div>
        )}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'relative',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: '100vh',
    fontFamily: 'Inter, sans-serif',
  },
  modal: {
    background: '#fff',
    borderRadius: 8,
    padding: 40,
    boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
    overflowY: 'auto',
    color: '#383838',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    fontSize: 20,
    fontWeight: 'bold',
    borderBottom: '1px solid #D0D5DD',
    paddingBottom: 16,
  },
  closeButton: {
    fontSize: 24,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    lineHeight: 1,
  },
  row: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    flex: 1,
    minWidth: 0,
  },
  input: {
    padding: 8,
    border: '1px solid #D0D5DD',
    borderRadius: 4,
    fontSize: 14,
    height: '48px',
    backgroundColor: '#F9FAFB',
  },
  submitButton: {
    padding: 10,
    height: '48px',
    backgroundColor: '#FF464A',
    color: 'white',
    fontSize: 16,
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginTop: 10,
  },
};
