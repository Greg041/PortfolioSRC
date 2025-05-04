"use client"

import { useState, useEffect, useCallback } from "react"
import "./ProjectMedia.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectMediaProps {
  projectImages: string[]
  projectUrl: string
}

export default function ProjectMedia({ projectImages, projectUrl }: ProjectMediaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Si no hay imágenes, usar una imagen de placeholder
  const images = projectImages;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [isTransitioning, images.length])

  const goToPrevious = () => {
    if (isTransitioning) return;

    setUserInteracted(true);
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;

    setUserInteracted(true);
    setIsTransitioning(true);
    setCurrentIndex(index);
  }

  // Resetear el estado de transición después de que la animación termine
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500) // Debe coincidir con la duración de la transición en CSS

    return () => clearTimeout(timer);
  }, [currentIndex])

  // Autoplay functionality
  useEffect(() => {
    // Don't autoplay if there's only one image
    if (images.length <= 1) return;

    const autoplayTimer = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 4000) // Advance every 4 seconds

    // Reset user interaction after some time
    let userInteractionTimer: NodeJS.Timeout
    if (userInteracted) {
      userInteractionTimer = setTimeout(() => {
        setUserInteracted(false);
      }, 10000) // Reset after 10 seconds of inactivity
    }

    return () => {
      clearInterval(autoplayTimer);
      if (userInteractionTimer) clearTimeout(userInteractionTimer);
    }
  }, [goToNext, images.length, isTransitioning, userInteracted])

  return (
    <div className="project-media">
      <div className="carousel-container">
        <div className="carousel-images-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${index === currentIndex ? "active" : ""}`}
              style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
            >
              <img
                src={image}
                alt={`Imagen del proyecto ${index + 1}`}
                className="carousel-img"
                onTransitionEnd={() => setIsTransitioning(false)}
              />
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        {images.length > 1 && (
          <>
            <button className="carousel-button prev-button" onClick={goToPrevious} disabled={isTransitioning}>
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-button next-button" onClick={goToNext} disabled={isTransitioning}>
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Indicadores */}
        {images.length > 1 && (
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {projectUrl && (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          Visitar proyecto
        </a>
      )}
    </div>
  )
}
