<?php

namespace App\Entity;

use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass=ProduitRepository::class)
 */
class Produit
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message="Nom is required")
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message="desciption cours is required")
     */
    private $desciption;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $prix;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\NotBlank(message="stock cours is required")
     */
    private $stock;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message="image cours is required")
     */
    private $image;

    /**
     * @ORM\ManyToMany(targetEntity=Commande::class, inversedBy="produits")
     */
    private $cmd;

    public function __construct()
    {
        $this->cmd = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDesciption(): ?string
    {
        return $this->desciption;
    }

    public function setDesciption(?string $desciption): self
    {
        $this->desciption = $desciption;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(?float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection|commande[]
     */
    public function getCmd(): Collectio
    {
        return $this->cmd;
    }

    public function addCmd(commande $cmd): self
    {
        if (!$this->cmd->contains($cmd)) {
            $this->cmd[] = $cmd;
        }

        return $this;
    }

    public function removeCmd(commande $cmd): self
    {
        $this->cmd->removeElement($cmd);

        return $this;
    }
}

