import { useState } from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: '' });

    try {
      await axios.post(`${API}/contact`, formData);
      setFormStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: '' });
      }, 5000);
    } catch (error) {
      const errorMsg = error.response?.data?.detail || 'Erro ao enviar mensagem. Tente novamente.';
      setFormStatus({ loading: false, success: false, error: errorMsg });
    }
  };

  const teamMembers = [
    {
      name: 'Jeterson',
      role: 'Fundador e Diretor Operacional',
      fullName: 'Jeterson Santos',
      description: 'Fundador da Duma, lidera a operação com visão estratégica e propósito.',
      image: 'https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/ti7mumyf_imagem_2026-07-14_230400710.png'
    },
    {
      name: 'Robson',
      role: 'Diretor Criativo',
      fullName: 'Robson Dezani',
      description: 'Cuida do conteúdo gráfico dentro e fora das redes.',
      image: 'https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/zliltdoe_file_000000001920720e9b63a9de400a392d.png'
    },
    {
      name: 'Sabrina',
      role: 'Desenvolvedora de Software',
      fullName: 'Sabrina Ribeiro',
      description: 'Transforma ideias em soluções tecnológicas inovadoras.',
      image: 'https://customer-assets.emergentagent.com/job_page-transfer-demo/artifacts/9g31duf5_WhatsApp%20Image%202026-07-14%20at%2015.37.37.jpeg'
    },
    {
      name: 'Igor',
      role: 'Diretor de Audiovisual',
      fullName: 'Igor Richard',
      description: 'Comanda a produção audiovisual com criatividade e técnica.',
      image: 'https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/t329jinf_file_000000003454720ea4b874bc78bd8e3d.png'
    },
    {
      name: 'Estela',
      role: 'Diretora de Social Media',
      fullName: 'Estela Freire',
      description: 'Estrategista de conteúdo que constrói presença digital autêntica.',
      image: 'https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/0ir7yzjh_file_00000000a06c71f5b87a6dc954995a6e.png'
    },
    {
      name: 'Bruno',
      role: 'Diretor de Tecnologia',
      fullName: 'Bruno Henrique',
      description: 'Lidera o desenvolvimento tecnológico com inovação.',
      image: 'https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/h1l8jvec_imagem_2026-07-14_152905982.png'
    },
    {
      name: 'Guilherme',
      role: 'Diretor de Projetos',
      fullName: 'Guilherme Giusti',
      description: 'Coordena projetos garantindo entregas de excelência.',
      image: 'https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/b351ug65_file_000000004010720ea54ed686f2d44862.png'
    },
    {
      name: 'Gabriel',
      role: 'Diretor Editorial',
      fullName: 'Gabriel Renato',
      description: 'Lidera a criação editorial com visão estratégica.',
      image: 'https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/dwpev5rl_file_000000008a94720e833ad38f7b5e1ff4.png'
    }
  ];

  const services = [
    { title: 'Gestão de rede social', icon: '📱' },
    { title: 'Criativos para campanhas', icon: '🎨' },
    { title: 'Edição de vídeo', icon: '🎬' },
    { title: 'Design de produtos', icon: '✨' },
    { title: 'Criação de site ou aplicativo', icon: '💻' },
    { title: 'Tráfego pago', icon: '📊' },
    { title: 'Criar campanhas do absoluto zero', icon: '🚀' },
    { title: 'Branding e posicionamento de marca', icon: '🎯' },
    { title: 'Identidade visual', icon: '🎭' }
  ];

  const professionals = [
    'Publicitários', 'Designers gráficos', 'Videomakers', 'Ilustradores',
    'Animadores', 'Social Media', 'Marketeiros', 'Copy', 'Influenciadores', 'Fotógrafos'
  ];

  // Duplicate for seamless loop
  const duplicatedProfessionals = [...professionals, ...professionals];

  const whatsappLink = 'https://wa.me/message/6BVRXSLOXBSWK1';
  const instagramLink = 'https://instagram.com/dumacriatividade';
  const xLink = 'https://x.com/Dumacriatividad';

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar" data-testid="navbar">
        <div className="container">
          <div className="navbar-content">
            <h1 className="logo" data-testid="logo">duma.</h1>
            <a
              href={whatsappLink}
              className="cta-button-small"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-cta-button"
            >
              <span className="button-icon">💬</span>
              Fale conosco
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="badge" data-testid="hero-badge">
              <span className="badge-dot"></span>
              Comunidade colaborativa de marketing
            </div>
            <h1 className="hero-title" data-testid="hero-title">
              Somos a <span className="highlight">Duma</span> — a comunidade daqueles que se juntaram para entregar o melhor marketing do Brasil
            </h1>
            <p className="hero-subtitle" data-testid="hero-subtitle">
              Somos um grupo de profissionais independentes da área do marketing que se juntaram para criar a Duma, uma comunidade colaborativa que se propõe a entregar qualquer ideia, serviço ou produto com qualidade máxima.
            </p>
            <a
              href={whatsappLink}
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-button"
            >
              <span className="button-icon">💬</span>
              Fale com um especialista no WhatsApp
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Professionals Carousel */}
      <section className="professionals-carousel" data-testid="professionals-carousel">
        <div className="carousel-track">
          {duplicatedProfessionals.map((prof, index) => (
            <div key={index} className="carousel-item">
              <span>{prof}</span>
              <span className="separator">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Description */}
      <section className="team-description" data-testid="team-description">
        <div className="container">
          <p className="description-text">
            Nossa equipe é formada por Publicitários, Designers gráficos, Videomakers, Ilustradores, Animadores, Social Media, Marketeiros, Copy, Influenciadores, Fotógrafos e muitos outros.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" data-testid="team-section">
        <div className="container">
          <h2 className="section-title" data-testid="team-title">Conheça as lideranças do nosso time</h2>
          
          <div className="team-showcase">
            <div className="team-image-container">
              <img
                src={teamMembers[activeTeamMember].image}
                alt={teamMembers[activeTeamMember].name}
                className="team-image"
                data-testid="team-member-image"
              />
            </div>
            
            <div className="team-info">
              <div className="team-number">0{activeTeamMember + 1}</div>
              <h3 className="team-name" data-testid="team-member-name">{teamMembers[activeTeamMember].fullName}</h3>
              <p className="team-role" data-testid="team-member-role">{teamMembers[activeTeamMember].role}</p>
              <p className="team-description" data-testid="team-member-description">{teamMembers[activeTeamMember].description}</p>
            </div>
          </div>

          <div className="team-navigation">
            {teamMembers.map((member, index) => (
              <button
                key={index}
                className={`team-nav-button ${index === activeTeamMember ? 'active' : ''}`}
                onClick={() => setActiveTeamMember(index)}
                data-testid={`team-nav-${member.name.toLowerCase()}`}
              >
                {member.name}
              </button>
            ))}
          </div>

          <p className="team-footer-text">
            Nossa equipe é composta por vários profissionais com especializações diferentes, prontos pra atender sua demanda agora mesmo!
          </p>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="cta-section-1" data-testid="cta-section-1">
        <div className="container">
          <a
            href={whatsappLink}
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-button-1"
          >
            <span className="button-icon">💬</span>
            Conta pra gente do que precisa
            <span className="button-arrow">→</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" data-testid="services-section">
        <div className="container">
          <h2 className="section-title" data-testid="services-title">Alguns serviços que você pode encontrar com a gente</h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-testid={`service-card-${index}`}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            ))}
          </div>

          <div className="services-description">
            <p>
              Nossos serviços podem ser feitos por um ou vários profissionais preparados para garantir performance e resultado. Fala pra gente qual seu projeto e vamos desenhar uma forma de torná-lo ainda mais lucrativo.
            </p>
          </div>

          <a
            href={whatsappLink}
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="services-cta-button"
          >
            <span className="button-icon">🚀</span>
            Quero dar esse passo
            <span className="button-arrow">→</span>
          </a>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section" data-testid="history-section">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <div className="history-label">NOSSA HISTÓRIA</div>
              <h2 className="history-title">Juntamos o que há de melhor no marketing</h2>
              <p className="history-intro">
                Fomos fundados para juntar todo o conhecimento do que há de melhor no marketing para fazer duas coisas principais:
              </p>
              
              <div className="history-points">
                <div className="history-point">
                  <div className="point-number">1</div>
                  <p>Valorizar o pensamento humano capaz de pensar e criar projetos incríveis.</p>
                </div>
                <div className="history-point">
                  <div className="point-number">2</div>
                  <p>Entregar essas ideias com a maior qualidade possível, juntando o que há de melhor no mercado.</p>
                </div>
              </div>
            </div>
            
            <div className="history-image-container">
              <div className="team-collage" data-testid="team-collage">
                <div className="collage-item collage-1">
                  <img src="https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/ti7mumyf_imagem_2026-07-14_230400710.png" alt="Jeterson Santos" />
                </div>
                <div className="collage-item collage-2">
                  <img src="https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/zliltdoe_file_000000001920720e9b63a9de400a392d.png" alt="Robson Dezani" />
                </div>
                <div className="collage-item collage-3">
                  <img src="https://customer-assets.emergentagent.com/job_page-transfer-demo/artifacts/9g31duf5_WhatsApp%20Image%202026-07-14%20at%2015.37.37.jpeg" alt="Sabrina Ribeiro" />
                </div>
                <div className="collage-item collage-4">
                  <img src="https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/t329jinf_file_000000003454720ea4b874bc78bd8e3d.png" alt="Igor Richard" />
                </div>
                <div className="collage-item collage-5">
                  <img src="https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/0ir7yzjh_file_00000000a06c71f5b87a6dc954995a6e.png" alt="Estela Freire" />
                </div>
                <div className="collage-item collage-6">
                  <img src="https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/h1l8jvec_imagem_2026-07-14_152905982.png" alt="Bruno Henrique" />
                </div>
                <div className="collage-item collage-7">
                  <img src="https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/b351ug65_file_000000004010720ea54ed686f2d44862.png" alt="Guilherme Giusti" />
                </div>
                <div className="collage-item collage-8">
                  <img src="https://customer-assets-jt897jd0.emergentagent.net/job_page-transfer-demo/artifacts/dwpev5rl_file_000000008a94720e833ad38f7b5e1ff4.png" alt="Gabriel Renato" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="cta-section-2" data-testid="cta-section-2">
        <div className="container">
          <div className="cta-box">
            <p className="cta-text">
              Nossa equipe é composta por vários profissionais com especializações diferentes, prontos pra atender sua demanda agora mesmo!
            </p>
            <a
              href={whatsappLink}
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-button-2"
            >
              <span className="button-icon">💬</span>
              Conta pra gente do que precisa
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section" data-testid="contact-section" id="contato">
        <div className="container">
          <div className="contact-header">
            <div className="badge" data-testid="contact-badge">
              <span className="badge-dot"></span>
              Vamos conversar
            </div>
            <h2 className="section-title" data-testid="contact-title">
              Pronto para <span className="highlight">transformar</span> sua marca?
            </h2>
            <p className="contact-subtitle">
              Preencha o formulário abaixo e nossa equipe entrará em contato com você em breve.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit} data-testid="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nome completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Seu nome"
                  data-testid="contact-input-name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  placeholder="seu@email.com"
                  data-testid="contact-input-email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="(11) 99999-9999"
                  data-testid="contact-input-phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  placeholder="Sobre o que quer conversar?"
                  data-testid="contact-input-subject"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                placeholder="Conta pra gente sobre seu projeto..."
                rows="5"
                data-testid="contact-input-message"
              />
            </div>

            {formStatus.success && (
              <div className="form-message success" data-testid="form-success-message">
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            {formStatus.error && (
              <div className="form-message error" data-testid="form-error-message">
                ✗ {formStatus.error}
              </div>
            )}

            <button
              type="submit"
              className="cta-button submit-button"
              disabled={formStatus.loading}
              data-testid="contact-submit-button"
            >
              {formStatus.loading ? (
                <>
                  <span className="button-icon">⏳</span>
                  Enviando...
                </>
              ) : (
                <>
                  <span className="button-icon">✉️</span>
                  Enviar mensagem
                  <span className="button-arrow">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="container">
          <div className="footer-content">
            <h2 className="logo" data-testid="footer-logo">duma.</h2>
            <div className="social-links">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-testid="instagram-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </svg>
                Instagram
              </a>
              <a
                href={xLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-testid="x-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
                X
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                data-testid="whatsapp-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Duma. Comunidade colaborativa de marketing.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
