<?php

namespace App\Entity;

use App\Repository\CommandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass=CommandeRepository::class)
 */
class Commande
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nomutilisateur;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\NotBlank
     */
    private $tel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank
     */
    private $adress;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbproduit;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Assert\NotBlank
     * @Assert\Range(
     *      min = "now"
     * )
     */
    private $date;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $prixtotale;

    /**
     * @ORM\ManyToOne(targetEntity=Produit::class, inversedBy="Commande")
     */
    private $produit;








    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomutilisateur(): ?string
    {
        return $this->nomutilisateur;
    }

    public function setNomutilisateur(?string $nomutilisateur): self
    {
        $this->nomutilisateur = $nomutilisateur;

        return $this;
    }

    public function getTel(): ?int
    {
        return $this->tel;
    }

    public function setTel(?int $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(?string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getNbproduit(): ?int
    {
        return $this->nbproduit;
    }

    public function setNbproduit(?int $nbproduit): self
    {
        $this->nbproduit = $nbproduit;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getPrixtotale(): ?float
    {
        return $this->prixtotale;
    }

    public function setPrixtotale(?float $prixtotale): self
    {
        $this->prixtotale = $prixtotale;

        return $this;
    }

    public function getProduit(): ?Produit
    {
        return $this->produit;
    }

    public function setProduit(?Produit $produit): self
    {
        $this->produit = $produit;

        return $this;
    }


}

